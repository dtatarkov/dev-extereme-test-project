using Microsoft.Extensions.Configuration;

namespace API
{
    public class AppSettings
    {
        public DomainsSettings DomainsSettings { get; set; } = new DomainsSettings();
        public TderaSettings TderaSettings { get; set; } = new TderaSettings();

        public AppSettings(IConfiguration config)
        {
            config.GetSection("Domains").Bind(DomainsSettings);
            config.GetSection("Tdera").Bind(TderaSettings);
        }
    }
}
