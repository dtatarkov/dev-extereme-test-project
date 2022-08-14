namespace API.Services
{
    public interface IBase64Service
    {
        string Encode(string value);
        string Decode(string value);
    }
}