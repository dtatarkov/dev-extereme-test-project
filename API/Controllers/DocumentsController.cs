using API.DTO;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]    
    public class DocumentsController : ControllerBase
    {
        private readonly IDocumentsService documentsService;

        public DocumentsController(IDocumentsService documentsService)
        {
            this.documentsService = documentsService;
        }

        [HttpGet]
        [Route("~/documents")]
        public async Task<IEnumerable<TderaDocument>> Get()
        {
            return await documentsService.GetDocumentsAsync();
        }
    }
}
