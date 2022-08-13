using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Services.Encoders
{
    public interface IEncoder
    {
        string Encode(string value);
        string Decode(string value);
    }
}
