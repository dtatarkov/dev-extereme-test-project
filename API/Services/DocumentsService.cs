using API.DTO;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{
    public class DocumentsService: IDocumentsService
    {
        private readonly AppSettings appSettings;
        private readonly HttpClient httpClient;
        private readonly IBase64Service base64Service;
        private readonly ILogger<DocumentsService> logger;

        public DocumentsService(
            AppSettings appSettings, 
            HttpClient httpClient,
            IBase64Service base64Service,
            ILogger<DocumentsService> logger)
        {
            this.appSettings = appSettings;
            this.httpClient = httpClient;
            this.base64Service = base64Service;
            this.logger = logger;
        }

        public Task<IEnumerable<TderaDocument>> GetDocumentsAsync() => GetAsync<IEnumerable<TderaDocument>>("http://api-test.tdera.ru/api/getdocumentlist");

        public Task<TderaDocumentDetails> GetDocumentDetailsByIdAsync(int id) => GetAsync<TderaDocumentDetails>($"http://api-test.tdera.ru/api/getdocument?id={id}");

        private async Task<T> GetAsync<T>(string url)
        {
            try
            {
                var request = new HttpRequestMessage()
                {
                    RequestUri = new Uri(url),
                    Method = HttpMethod.Get
                };

                request.Headers.Authorization = GetAuthHeader();

                var response = await httpClient.SendAsync(request);
                var responseContentRaw = await response.Content.ReadAsStringAsync();
                var responseContent = JsonConvert.DeserializeObject<TderaAPIResponse<T>>(responseContentRaw);

                if (responseContent.exception?.error_msg != null)
                    throw new Exception(responseContent.exception.error_msg);

                return responseContent.data;
            }
            catch (Exception ex)
            {
                logger.LogError("Tdera API error", ex.Message);
                throw;
            }
        }

        private AuthenticationHeaderValue GetAuthHeader()
        {
            var token = base64Service.Encode($"{appSettings.TderaSettings.Login}:{appSettings.TderaSettings.Password}");
            return new AuthenticationHeaderValue("Basic", token);
        }
    }
}
