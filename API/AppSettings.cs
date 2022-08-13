using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
