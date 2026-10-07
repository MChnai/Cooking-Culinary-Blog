using Bogus;
using CulinaryBlog.Domain.Entities;
using CulinaryBlog.Domain.Enums;
using CulinaryBlog.Domain.ValueObjects;
using System.Text.RegularExpressions;

namespace CulinaryBlog.Infrastructure.Persistence.Seeders;

public class CulinaryDataGenerator
{
    private static readonly (string Name, string Slug, string Desc, string Img)[] CategoryDefinitions = new[]
    {
        ("Phở & Nước Dùng Truyền Thống", "pho-broths", "Nước dùng ninh xương thảo mộc thơm lừng, bánh phở tươi dẻo dai", "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80"),
        ("Món Kho Tộ Đậm Đà", "claypot-braised", "Thịt kho, cá kho niêu đất thơm nức mũi đậm đà hương vị quê hương", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"),
        ("Nem Rán & Món Khai Vị Giòn Tan", "appetizers-rolls", "Chả giò rế, nem nướng và các món ăn chơi giòn rụm bắt vị", "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80"),
        ("Cơm Đĩa & Cơm Chiên Chảo Nóng", "rice-dishes", "Cơm tấm sườn bì chả, cơm chiên giòn hạt tơi ngập tràn topping", "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"),
        ("Gỏi Cuốn & Nộm Thanh Mát", "salads-fresh-rolls", "Rau thơm đồng nội cuốn bánh tráng tôm thịt chấm tương bơ đậu phộng", "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"),
        ("Món Nướng Than Hoa & BBQ", "grilled-bbq", "Thịt xiên nướng, sườn que tẩm ướp sốt mật ong thơm lừng than hồng", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"),
        ("Hải Sản Biển Tươi Sống", "seafood-specialties", "Tôm hùm, cua biển sốt me, mực nướng sa tế đậm vị mặn mòi của biển", "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"),
        ("Chay Thực Dưỡng & Thanh Đạm", "plant-based-vegan", "Món chay thanh tịnh từ nấm, rau củ hữu cơ và đậu hũ non tốt cho sức khỏe", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"),
        ("Mì Thủ Công & Mì Xào Giòn", "noodles-pastas", "Mì trứng sợi tươi, mì xào giòn hải sản và hủ tiếu Nam Vang trứ danh", "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"),
        ("Bánh Mì & Điểm Tâm Sáng", "bakery-sandwiches", "Bánh mì Việt Nam vỏ giòn ruột xốp, pate thơm béo cùng dưa chua ngập tràn", "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80"),
        ("Chè Cung Đình & Tráng Miệng", "sweet-soups-desserts", "Chè khúc bạch, chè bưởi An Giang, bánh flan caramel ngọt ngào thanh tao", "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"),
        ("Trà Thảo Mộc & Thức Uống", "herbal-teas-brews", "Trà đào cam sả, cà phê muối, trà sen tuyết mát lạnh thanh lọc cơ thể", "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"),
        ("Lẩu & Món Nhúng Gia Đình", "hot-pot-dipping", "Nước lẩu chua cay Tom Yum, lẩu nấm bồ câu sum vầy ngày cuối tuần", "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"),
        ("Ẩm Thực Đường Phố Sài Gòn & Hà Nội", "street-food-snacks", "Bánh tráng nướng, bắp xào bơ, phá lấu bò đặc sản đường phố", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"),
        ("Món Hấp Thanh Vị Dinh Dưỡng", "steamed-specialties", "Cá chẽm hấp Hong Kong, gà hấp lá chanh giữ trọn dưỡng chất tự nhiên", "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80"),
        ("Bánh Xèo & Bánh Khọt Giòn Rụm", "savory-pancakes", "Bánh xèo vàng ươm nghệ tây ngập nhân tôm thịt cuốn cải xanh", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"),
        ("Trứng & Đậu Hũ Biến Tấu", "egg-tofu-delicacies", "Đậu hũ sốt cà chua, trứng cuộn ngũ sắc mềm mịn thơm béo", "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"),
        ("Ẩm Thực Cay Nồng Miền Trung", "spicy-central-heritage", "Bún bò Huế cay xé lưỡi, mì Quảng tôm thịt đậm đà hồn quê xứ Quảng", "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"),
        ("Nước Chấm & Gia Vị Bí Truyền", "sauces-dips", "Muối ớt xanh Nha Trang, sốt mắm chua ngọt sệt kẹo tỏi ớt", "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80"),
        ("Dim Sum & Há Cảo Á Đông", "dim-sum-dumplings", "Xíu mại tôm thịt, há cảo pha lê hấp xửng tre thơm phức ngào ngạt", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"),
        ("Mì Ý & Risotto Chuẩn Vị Ý", "italian-pasta-risotto", "Spaghetti Carbonara sốt trứng béo ngậy, Risotto hải sản thảo mộc", "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"),
        ("Ramen & Bento Nhật Bản", "japanese-ramen-donburi", "Tonkotsu Ramen xương hầm 18 giờ, trứng ngâm tương Ajitsuke Tamago", "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"),
        ("Cà Ri & Tom Yum Thái Lan", "thai-curries-tom-yum", "Canh chua Tom Yum tôm sú cốt dừa cay nồng, cà ri xanh thơm lá chanh kaffir", "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"),
        ("Bò Bít Tết & Món Âu Hiện Đại", "modern-bistro-steaks", "Ribeye Steak sốt tiêu đen nấm truffle, khoai tây nghiền bơ mịn", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80")
    };

    private static readonly (string Name, string Qty, string Unit, string Notes)[] IngredientPool = new[]
    {
        ("Thịt thăn bò tươi", "500", "g", "Thái lát mỏng ngược thớ"),
        ("Bánh phở tươi sợi nhỏ", "1", "kg", "Trụng qua nước sôi"),
        ("Xương ống bò hầm nước dùng", "2", "kg", "Chần sạch ninh 10 tiếng"),
        ("Hành tây củ lớn", "2", "củ", "Nướng thơm bóc vỏ"),
        ("Gừng già tươi", "100", "g", "Nướng đập dập thơm nức"),
        ("Hoa hồi khô", "5", "hoa", "Rang vàng dậy mùi"),
        ("Quế thanh khô", "2", "thanh", "Rang thơm nhẹ lửa"),
        ("Thảo quả khô", "2", "quả", "Nướng bẹp vỏ"),
        ("Hành hoa & ngò rí", "150", "g", "Rửa sạch xắt nhuyễn"),
        ("Nước mắm cá cơm truyền thống", "4", "muỗng canh", "Loại 40 độ đạm"),
        ("Muối hạt tinh khiết", "2", "muỗng cà phê", "Nêm vừa miệng"),
        ("Đường phèn kết tinh", "30", "g", "Tạo vị ngọt thanh tao"),
        ("Hạt tiêu đen Phú Quốc", "1", "muỗng cà phê", "Xay vỡ thơm nồng"),
        ("Chanh tươi mọng nước", "2", "trái", "Cắt múi vắt lấy nước cốt"),
        ("Ớt hiểm tươi", "4", "trái", "Thái lát mỏng"),
        ("Tỏi khô cô đơn", "6", "tép", "Băm nhuyễn phi vàng"),
        ("Rau húng quế & ngò gai", "200", "g", "Ăn kèm tươi sống"),
        ("Dầu thực vật cao cấp", "50", "ml", "Dùng chiên xào"),
        ("Bột ngọt Ajinomoto", "1", "muỗng cà phê", "Cân bằng vị giác"),
        ("Nước hầm xương heo trong", "1.5", "lít", "Lọc qua rây mịn"),
        ("Thịt tôm sú tươi", "350", "g", "Bóc nõn rút chỉ đen"),
        ("Thịt nạc vai heo băm", "300", "g", "Có lẫn chút mỡ mềm"),
        ("Nấm hương khô thơm", "50", "g", "Ngâm nở thái chỉ"),
        ("Mộc nhĩ đen khô", "40", "g", "Ngâm nước ấm băm nhỏ"),
        ("Miến dong làng So", "100", "g", "Cắt khúc ngắn 3cm"),
        ("Trứng gà ta tươi", "3", "quả", "Lấy cả lòng đỏ và trắng"),
        ("Cà rốt Đà Lạt", "1", "củ", "Bào sợi nhuyễn mỏng"),
        ("Su hào tươi", "1", "củ", "Thái hạt lựu nhỏ"),
        ("Bánh tráng nem truyền thống", "1", "gói", "Loại mỏng giòn rụm"),
        ("Hạt sen Huế tươi", "150", "g", "Bỏ tâm sen tránh đắng"),
        ("Đậu xanh xát vỏ", "200", "g", "Ngâm nước 2 giờ hấp chín"),
        ("Nước cốt dừa đậm đặc", "250", "ml", "Vắt từ cơm dừa già"),
        ("Lá dứa nếp thơm", "5", "nhánh", "Rửa sạch bó thành bó"),
        ("Sả cây tươi thơm", "6", "nhánh", "Đập dập cắt khúc 5cm"),
        ("Lá chanh non", "10", "lá", "Vò nhẹ dậy mùi thơm"),
        ("Ớt sừng đỏ không cay", "2", "trái", "Thái sợi trang trí"),
        ("Rau răm tươi", "50", "g", "Nhặt lấy lá non"),
        ("Bột năng tinh chế", "100", "g", "Hòa tan với nước lọc"),
        ("Mè trắng rang thơm", "30", "g", "Rang vàng thơm nức"),
        ("Lạc rang đập dập", "80", "g", "Bỏ vỏ giã dập vừa"),
        ("Mật ong rừng nguyên chất", "3", "muỗng canh", "Ướp tạo độ bóng đẹp"),
        ("Dầu hào Maggi hảo hạng", "2", "muỗng canh", "Gia tăng hương umami"),
        ("Xì dầu đậu nành nguyên chất", "3", "muỗng canh", "Loại ủ lên men tự nhiên"),
        ("Dấm gạo nếp thơm", "50", "ml", "Tạo vị chua thanh dịu"),
        ("Bơ lạt nguyên chất Pháp", "50", "g", "Nấu chảy thơm ngậy"),
        ("Hành baro (Tỏi tây)", "1", "cây", "Thái xéo mỏng"),
        ("Rau xà lách mỡ", "300", "g", "Rửa sạch để ráo nước"),
        ("Dưa leo tươi giòn", "2", "trái", "Gọt vỏ thái lát dài"),
        ("Giá đỗ tươi sạch", "200", "g", "Rửa sạch ngắt bớt rễ"),
        ("Tóp mỡ giòn rụm", "50", "g", "Thắng giòn ráo mỡ")
    };

    private static readonly (string Title, string Desc, int Timer)[] StepTemplates = new[]
    {
        ("Sơ chế nguyên liệu tươi", "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.", 10),
        ("Pha chế sốt ướp bí truyền", "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.", 8),
        ("Tẩm ướp thấm đượm gia vị", "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.", 35),
        ("Hầm nước dùng / Ninh lửa nhỏ", "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.", 60),
        ("Chế biến nhiệt / Xào nấu chín tới", "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.", 15),
        ("Nêm nếm hoàn thiện hương vị", "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.", 5),
        ("Trình bày và thưởng thức", "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.", 5)
    };

    public static List<Category> GenerateCategories()
    {
        var categories = new List<Category>();
        for (int i = 0; i < CategoryDefinitions.Length; i++)
        {
            var def = CategoryDefinitions[i];
            categories.Add(new Category
            {
                Id = Guid.Parse($"22222222-2222-2222-2222-{(i + 1):D12}"),
                Name = def.Name,
                Slug = def.Slug,
                Description = def.Desc,
                ImageUrl = def.Img,
                CreatedAt = DateTime.UtcNow,
                IsDeleted = false
            });
        }
        return categories;
    }

    public static List<ApplicationUser> GenerateUsers()
    {
        return new List<ApplicationUser>
        {
            new ApplicationUser
            {
                Id = Guid.Parse("11111111-1111-1111-1111-000000000001"),
                Username = "culinary_admin",
                Email = "admin@culinaryblog.com",
                PasswordHash = "AQAAAAEAACcQAAAAEHASH123456789_BCRYPT_SECURE_HASH",
                FullName = "Executive Chef Admin",
                Role = "Admin",
                Bio = "Bếp trưởng điều hành với 18 năm kinh nghiệm nghệ thuật ẩm thực Đông Dương.",
                EmailConfirmed = true,
                CreatedAt = DateTime.UtcNow
            },
            new ApplicationUser
            {
                Id = Guid.Parse("11111111-1111-1111-1111-000000000002"),
                Username = "chef_nguyen",
                Email = "nguyen.chef@culinaryblog.com",
                FullName = "Chef Nguyễn Văn Minh",
                PasswordHash = "AQAAAAEAACcQAAAAEHASH123456789_BCRYPT_SECURE_HASH",
                Role = "Author",
                Bio = "Nghệ nhân phở truyền thống và các món hầm niêu đất bí truyền xứ Kinh Kỳ.",
                EmailConfirmed = true,
                CreatedAt = DateTime.UtcNow
            },
            new ApplicationUser
            {
                Id = Guid.Parse("11111111-1111-1111-1111-000000000003"),
                Username = "pastry_le",
                Email = "le.pastry@culinaryblog.com",
                FullName = "Lê Thục Đoan",
                PasswordHash = "AQAAAAEAACcQAAAAEHASH123456789_BCRYPT_SECURE_HASH",
                Role = "Author",
                Bio = "Chuyên gia bánh mì artisan và tráng miệng hiện đại phong cách Pháp - Á.",
                EmailConfirmed = true,
                CreatedAt = DateTime.UtcNow
            },
            new ApplicationUser
            {
                Id = Guid.Parse("11111111-1111-1111-1111-000000000004"),
                Username = "healthy_tran",
                Email = "tran.healthy@culinaryblog.com",
                FullName = "Trần Mai Anh",
                PasswordHash = "AQAAAAEAACcQAAAAEHASH123456789_BCRYPT_SECURE_HASH",
                Role = "Author",
                Bio = "Chuyên gia dinh dưỡng lâm sàng, tác giả bộ thực đơn thực dưỡng lành mạnh.",
                EmailConfirmed = true,
                CreatedAt = DateTime.UtcNow
            },
            new ApplicationUser
            {
                Id = Guid.Parse("11111111-1111-1111-1111-000000000005"),
                Username = "bistro_marco",
                Email = "marco.rossi@culinaryblog.com",
                FullName = "Marco Rossi",
                PasswordHash = "AQAAAAEAACcQAAAAEHASH123456789_BCRYPT_SECURE_HASH",
                Role = "Author",
                Bio = "Đầu bếp người Ý đam mê kết hợp ẩm thực Địa Trung Hải và gia vị nhiệt đới.",
                EmailConfirmed = true,
                CreatedAt = DateTime.UtcNow
            }
        };
    }

    public static List<Recipe> GenerateRecipes(List<Category> categories, List<ApplicationUser> users, int count = 100)
    {
        var faker = new Faker("vi");
        var recipes = new List<Recipe>();

        for (int i = 0; i < count; i++)
        {
            var cat = categories[i % categories.Count];
            var author = users[i % users.Count];
            var recipeId = Guid.Parse($"33333333-3333-3333-3333-{(i + 1):D12}");

            var rawTitle = $"{cat.Name} Đặc Biệt Hương Vị #{i + 1}";
            var slug = $"{cat.Slug}-mon-ngon-so-{i + 1}";

            var recipe = new Recipe
            {
                Id = recipeId,
                Title = rawTitle,
                Slug = slug,
                Description = $"Công thức tinh hoa nghệ thuật nấu ăn thuộc danh mục {cat.Name}, chuẩn vị và bổ dưỡng.",
                Instructions = "Chi tiết các bước thực hiện tuần tự để giữ trọn vẹn sắc, hương và vị của món ăn.",
                Notes = "Nên chọn nguyên liệu tươi hữu cơ vào buổi sáng sớm để đảm bảo chất lượng dinh dưỡng tốt nhất.",
                PrepTimeMinutes = faker.PickRandom(15, 20, 25, 30, 45),
                CookTimeMinutes = faker.PickRandom(20, 30, 45, 60, 90),
                Servings = faker.PickRandom(2, 4, 6, 8),
                Difficulty = faker.PickRandom<RecipeDifficulty>(),
                Status = i < 95 ? RecipeStatus.Published : RecipeStatus.Draft,
                PublishedAt = DateTime.UtcNow.AddHours(-i * 3),
                ViewCount = faker.Random.Int(150, 18500),
                RatingAverage = Math.Round((decimal)faker.Random.Double(4.3, 5.0), 2),
                RatingCount = faker.Random.Int(12, 380),
                CategoryId = cat.Id,
                Category = cat,
                AuthorId = author.Id,
                Author = author,
                CreatedAt = DateTime.UtcNow,
                IsDeleted = false,
                Nutrition = new RecipeNutrition
                {
                    Calories = faker.Random.Int(250, 750),
                    Protein = (decimal)Math.Round(faker.Random.Double(15.0, 55.0), 2),
                    Carbohydrates = (decimal)Math.Round(faker.Random.Double(20.0, 80.0), 2),
                    Fat = (decimal)Math.Round(faker.Random.Double(5.0, 35.0), 2),
                    Fiber = (decimal)Math.Round(faker.Random.Double(2.0, 8.0), 2),
                    Sugar = (decimal)Math.Round(faker.Random.Double(2.0, 10.0), 2),
                    Sodium = (decimal)Math.Round(faker.Random.Double(400.0, 1100.0), 2)
                }
            };

            // MANDATORY: At least 10 Ingredients per recipe
            int numIngredients = faker.Random.Int(10, 13);
            var chosenPool = faker.PickRandom(IngredientPool, numIngredients);
            int ingIdx = 1;
            foreach (var item in chosenPool)
            {
                var ing = new RecipeIngredient
                {
                    Id = Guid.Parse($"44444444-4444-4444-{(i + 1):D4}-{ingIdx:D8}"),
                    RecipeId = recipeId,
                    Recipe = recipe,
                    Name = item.Name,
                    Quantity = decimal.TryParse(item.Qty, out var q) ? q : 1,
                    Unit = item.Unit,
                    Notes = item.Notes,
                    OrderIndex = ingIdx,
                    CreatedAt = DateTime.UtcNow,
                    IsDeleted = false
                };
                recipe.Ingredients.Add(ing);
                ingIdx++;
            }

            // MANDATORY: At least 5 Steps per recipe
            int numSteps = faker.Random.Int(5, 7);
            for (int s = 0; s < numSteps; s++)
            {
                var stepTpl = StepTemplates[s % StepTemplates.Length];
                var step = new RecipeStep
                {
                    Id = Guid.Parse($"55555555-5555-5555-{(i + 1):D4}-{(s + 1):D8}"),
                    RecipeId = recipeId,
                    Recipe = recipe,
                    StepNumber = s + 1,
                    Title = $"Bước {s + 1}: {stepTpl.Title}",
                    Description = stepTpl.Desc,
                    TimerMinutes = stepTpl.Timer,
                    CreatedAt = DateTime.UtcNow,
                    IsDeleted = false
                };
                recipe.Steps.Add(step);
            }

            // Images
            recipe.Images.Add(new RecipeImage
            {
                Id = Guid.Parse($"66666666-6666-6666-{(i + 1):D4}-00000001"),
                RecipeId = recipeId,
                Recipe = recipe,
                OriginalUrl = cat.ImageUrl ?? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
                ThumbnailUrl = cat.ImageUrl,
                AltText = recipe.Title,
                IsPrimary = true,
                DisplayOrder = 0,
                CreatedAt = DateTime.UtcNow,
                IsDeleted = false
            });

            recipes.Add(recipe);
        }

        return recipes;
    }
}
