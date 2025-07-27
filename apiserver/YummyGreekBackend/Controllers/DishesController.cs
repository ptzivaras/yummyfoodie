using Microsoft.AspNetCore.Mvc;
using YummyGreekBackend.Models;
using System.Text.Json;

namespace YummyGreekBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DishesController : ControllerBase
    {
        private readonly DishData _dishData;

      public DishesController()
{
    try
    {
        // Adjust the file path if your JSON file is in a folder (e.g., "Data/dishes.json")
        string path = "Data/dishes.json"; // or "dishes.json" if it’s at the root
        if (!System.IO.File.Exists(path))
        {
            Console.WriteLine("File not found at: " + path);
        }
        var jsonContent = System.IO.File.ReadAllText(path);
        Console.WriteLine("Loaded JSON content:");
        Console.WriteLine(jsonContent);
        
        _dishData = JsonSerializer.Deserialize<DishData>(
            jsonContent,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
        ) ?? new DishData();
        
        Console.WriteLine($"Number of dishes loaded: {_dishData.Dishes.Count}");
    }
    catch (Exception ex)
    {
        Console.WriteLine("Error loading JSON file: " + ex.Message);
        _dishData = new DishData();
    }
}


        // GET: api/dishes
        [HttpGet]
        public ActionResult<List<Dish>> GetAllDishes()
        {
            return _dishData.Dishes;
        }

        // GET: api/dishes/5
        [HttpGet("{id}")]
        public ActionResult<Dish> GetDishById(int id)
        {
            var dish = _dishData.Dishes.FirstOrDefault(d => d.Id == id);
            if (dish == null)
            {
                return NotFound();
            }
            return dish;
        }
    }
}
