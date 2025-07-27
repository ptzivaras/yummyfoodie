// using System.Collections.Generic;
// using System.IO;
// using System.Linq;
// using System.Text.Json;
// using YummyGreekBackend.Models;

// namespace YummyGreekApi.Services
// {
//     public class DishService : IDishService
//     {
//         private readonly List<Dish> _dishes;

//         public DishService()
//         {
//             var json = File.ReadAllText("Data/dishes.json");
//             var data = JsonSerializer.Deserialize<DishData>(json);
//             _dishes = data.Dishes;
//         }

//         public IEnumerable<Dish> GetAllDishes()
//         {
//             return _dishes;
//         }

//         public Dish GetDishById(int id)
//         {
//             return _dishes.FirstOrDefault(d => d.Id == id);
//         }

//         public IEnumerable<Dish> FilterDishes(DishFilters filters)
//         {
//             var query = _dishes.AsEnumerable();

//             if (filters.DietaryPreferences != null && filters.DietaryPreferences.Any())
//             {
//                 query = query.Where(d => 
//                     filters.DietaryPreferences.All(dp => 
//                         d.Tags.DietaryPreferences.Contains(dp)));
//             }

//             if (filters.Allergens != null && filters.Allergens.Any())
//             {
//                 query = query.Where(d => 
//                     !filters.Allergens.Any(a => 
//                         d.Tags.Allergens.Contains(a)));
//             }

//             if (filters.MinPrice.HasValue)
//             {
//                 query = query.Where(d => d.Price >= filters.MinPrice);
//             }

//             if (filters.MaxPrice.HasValue)
//             {
//                 query = query.Where(d => d.Price <= filters.MaxPrice);
//             }

//             return query.ToList();
//         }

//         private class DishData
//         {
//             public List<Dish> Dishes { get; set; }
//         }
//     }
// }