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

        public async Task<IEnumerable<TderaDocument>> GetDocumentsAsync()
        {
            try
            {
                var request = new HttpRequestMessage()
                {
                    RequestUri = new Uri("http://api-test.tdera.ru/api/getdocumentlist"),
                    Method = HttpMethod.Get
                };

                var token = base64Service.Encode($"{appSettings.TderaSettings.Login}:{appSettings.TderaSettings.Password}");
                request.Headers.Authorization = new AuthenticationHeaderValue("Basic", token);

                var response = await httpClient.SendAsync(request);
                var responseContent = JsonConvert.DeserializeObject<TderaAPIResponse<IEnumerable<TderaDocument>>>(await response.Content.ReadAsStringAsync());

                if (responseContent.exception.error_msg != null)
                    throw new Exception(responseContent.exception.error_msg);

                return responseContent.data;
            }
            catch (Exception ex)
            {
                logger.LogError("Tdera API documents loading error", ex.Message);
                throw;
            }
        }

        public static string Base64Encode(string plainText)
        {
            var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
            return Convert.ToBase64String(plainTextBytes);
        }
    }
}
