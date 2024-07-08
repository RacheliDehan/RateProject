using Microsoft.AspNetCore.Mvc;

namespace Server_.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ExchangeRatesController : Controller
  {
    private static readonly string[] Currencies = new[]
    {
            "USD", "EUR", "GBP", "CNY", "ILS"
    };

    [HttpGet("currencies")]
    public IEnumerable<string> GetCurrencies()
    {
      
      return Currencies;
    }

        [HttpGet("exchange-rates/{baseCurrency}")]
    public IEnumerable<ExchangeRate> GetExchangeRates(string baseCurrency)
    {
      var random = new Random();
      return Currencies.Where(c => c != baseCurrency).Select(c => new ExchangeRate
      {
        Currency = c,
        Rate = Math.Round(random.NextDouble() * (1.5 - 0.5) + 0.5, 2)
      });
    }
    //    public IActionResult Index()
    //    {
    //      return View();
    //    }
  }

  public class ExchangeRate
  {
    public string Currency { get; set; }
    public double Rate { get; set; }
  }
}
