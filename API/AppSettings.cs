using Microsoft.Extensions.Configuration;

namespace API
{
    public class AppSettings
    {
        public TderaSettings TderaSettings { get; set; } = new TderaSettings();

        public AppSettings(IConfiguration config)
        {
            config.GetSection("Tdera").Bind(TderaSettings);
        }
    }
}
