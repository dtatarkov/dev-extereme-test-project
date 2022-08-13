using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.DTO
{
    public class TderaAPIException
    {
        public int error { get; set; }
        public string error_msg { get; set; }
    }
}
