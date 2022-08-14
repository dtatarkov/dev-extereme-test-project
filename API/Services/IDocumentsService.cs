using API.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IDocumentsService
    {
        Task<IEnumerable<TderaDocument>> GetDocumentsAsync();
        Task<TderaDocumentDetails> GetDocumentDetailsByIdAsync(int id);
    }
}