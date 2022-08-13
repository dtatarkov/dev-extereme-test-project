using API.Services.Encoders;

namespace API.Factories
{
    public interface IEncoderFactory
    {
        IEncoder GetBase64Encoder();
    }
}