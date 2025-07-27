using System.Text.Json;

namespace YummyGreekBackend.Models;

public class Dish
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Description { get; set; } = default!;
    public double Price { get; set; }
    public string Image { get; set; } = default!;
    public List<string> Ingredients { get; set; } = new List<string>();
    public JsonElement Tags { get; set; }  // Allows JSON elements (object or array)
}
