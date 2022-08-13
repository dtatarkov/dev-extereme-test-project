using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.DTO
{
    public class TderaAPIResponse<T>
    {
        public T data { get; set; }
        public TderaAPIException exception { get; set; }
    }
}
