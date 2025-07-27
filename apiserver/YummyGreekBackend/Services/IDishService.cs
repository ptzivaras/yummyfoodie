// using System.Collections.Generic;
// using YummyGreekBackend.Models;
// namespace YummyGreekApi.Services
// {
//     public interface IDishService
//     {
//         IEnumerable<Dish> GetAllDishes();
//         Dish GetDishById(int id);
//         IEnumerable<Dish> FilterDishes(DishFilters filters);
//     }

//     public class DishFilters
//     {
//         public List<string> DietaryPreferences { get; set; }
//         public List<string> Allergens { get; set; }
//         public decimal? MinPrice { get; set; }
//         public decimal? MaxPrice { get; set; }
//     }
// }