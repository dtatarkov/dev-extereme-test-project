using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.DTO
{
    public class TderaDocumentDetails
    {
        public IEnumerable<TderaDocumentMetadata> data1 { get; set; }
        public IEnumerable<TderaDocumentItem> data2 { get; set; }
    }
}
