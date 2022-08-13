using API.Services.Encoders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Factories
{
    public class EncoderFactory: IEncoderFactory
    {
        private readonly static IEncoder base64Encoder = new Base64Encoder();

        public IEncoder GetBase64Encoder()
        {
            return base64Encoder;
        }
    }
}
