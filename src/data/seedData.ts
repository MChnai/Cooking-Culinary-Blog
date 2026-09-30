import { Category, Recipe, RecipeDifficulty, RecipeStatus, ApplicationUser } from "../types";

export const SEED_USERS: ApplicationUser[] = [
  {
    "id": "usr-admin-001",
    "email": "admin@culinaryblog.com",
    "userName": "culinary_admin",
    "displayName": "Executive Chef Admin",
    "avatarUrl": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80",
    "bio": "Bếp trưởng điều hành với 18 năm kinh nghiệm nghệ thuật ẩm thực Đông Dương.",
    "isActive": true,
    "emailConfirmed": true,
    "roles": [
      "Admin",
      "Author"
    ],
    "createdAt": "2026-01-01T08:00:00Z"
  },
  {
    "id": "usr-author-002",
    "email": "nguyen.chef@culinaryblog.com",
    "userName": "chef_nguyen",
    "displayName": "Chef Nguyễn Văn Minh",
    "avatarUrl": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80",
    "bio": "Nghệ nhân phở truyền thống và các món hầm niêu đất bí truyền xứ Kinh Kỳ.",
    "isActive": true,
    "emailConfirmed": true,
    "roles": [
      "Author"
    ],
    "createdAt": "2026-01-15T10:30:00Z"
  },
  {
    "id": "usr-author-003",
    "email": "le.pastry@culinaryblog.com",
    "userName": "pastry_le",
    "displayName": "Lê Thục Đoan",
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    "bio": "Chuyên gia bánh mì artisan và tráng miệng hiện đại phong cách Pháp - Á.",
    "isActive": true,
    "emailConfirmed": true,
    "roles": [
      "Author"
    ],
    "createdAt": "2026-02-01T14:20:00Z"
  },
  {
    "id": "usr-author-004",
    "email": "tran.healthy@culinaryblog.com",
    "userName": "healthy_tran",
    "displayName": "Trần Mai Anh",
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    "bio": "Chuyên gia dinh dưỡng lâm sàng, tác giả bộ thực đơn thực dưỡng lành mạnh.",
    "isActive": true,
    "emailConfirmed": true,
    "roles": [
      "Author"
    ],
    "createdAt": "2026-02-10T09:15:00Z"
  },
  {
    "id": "usr-author-005",
    "email": "marco.rossi@culinaryblog.com",
    "userName": "bistro_marco",
    "displayName": "Marco Rossi",
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    "bio": "Đầu bếp người Ý đam mê kết hợp ẩm thực Địa Trung Hải và gia vị nhiệt đới.",
    "isActive": true,
    "emailConfirmed": true,
    "roles": [
      "Author"
    ],
    "createdAt": "2026-02-15T11:45:00Z"
  }
];

export const SEED_CATEGORIES: Category[] = [
  {
    "id": "cat-001",
    "name": "Phở & Nước Dùng Truyền Thống",
    "slug": "pho-broths",
    "description": "Nước dùng ninh xương thảo mộc thơm lừng, bánh phở tươi dẻo dai",
    "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 1,
    "recipeCount": 4,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-002",
    "name": "Món Kho Tộ Đậm Đà",
    "slug": "claypot-braised",
    "description": "Thịt kho, cá kho niêu đất thơm nức mũi đậm đà hương vị quê hương",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 2,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-003",
    "name": "Nem Rán & Món Khai Vị Giòn Tan",
    "slug": "appetizers-rolls",
    "description": "Chả giò rế, nem nướng và các món ăn chơi giòn rụm bắt vị",
    "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 3,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-004",
    "name": "Cơm Đĩa & Cơm Chiên Chảo Nóng",
    "slug": "rice-dishes",
    "description": "Cơm tấm sườn bì chả, cơm chiên giòn hạt tơi ngập tràn topping",
    "imageUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 4,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-005",
    "name": "Gỏi Cuốn & Nộm Thanh Mát",
    "slug": "salads-fresh-rolls",
    "description": "Rau thơm đồng nội cuốn bánh tráng tôm thịt chấm tương bơ đậu phộng",
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 5,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-006",
    "name": "Món Nướng Than Hoa & BBQ",
    "slug": "grilled-bbq",
    "description": "Thịt xiên nướng, sườn que tẩm ướp sốt mật ong thơm lừng than hồng",
    "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 6,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-007",
    "name": "Hải Sản Biển Tươi Sống",
    "slug": "seafood-specialties",
    "description": "Tôm hùm, cua biển sốt me, mực nướng sa tế đậm vị mặn mòi của biển",
    "imageUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 7,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-008",
    "name": "Chay Thực Dưỡng & Thanh Đạm",
    "slug": "plant-based-vegan",
    "description": "Món chay thanh tịnh từ nấm, rau củ hữu cơ và đậu hũ non tốt cho sức khỏe",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 8,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-009",
    "name": "Mì Thủ Công & Mì Xào Giòn",
    "slug": "noodles-pastas",
    "description": "Mì trứng sợi tươi, mì xào giòn hải sản và hủ tiếu Nam Vang trứ danh",
    "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 9,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-010",
    "name": "Bánh Mì & Điểm Tâm Sáng",
    "slug": "bakery-sandwiches",
    "description": "Bánh mì Việt Nam vỏ giòn ruột xốp, pate thơm béo cùng dưa chua ngập tràn",
    "imageUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 10,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-011",
    "name": "Chè Cung Đình & Tráng Miệng",
    "slug": "sweet-soups-desserts",
    "description": "Chè khúc bạch, chè bưởi An Giang, bánh flan caramel ngọt ngào thanh tao",
    "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 11,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-012",
    "name": "Trà Thảo Mộc & Thức Uống",
    "slug": "herbal-teas-brews",
    "description": "Trà đào cam sả, cà phê muối, trà sen tuyết mát lạnh thanh lọc cơ thể",
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 12,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-013",
    "name": "Lẩu & Món Nhúng Gia Đình",
    "slug": "hot-pot-dipping",
    "description": "Nước lẩu chua cay Tom Yum, lẩu nấm bồ câu sum vầy ngày cuối tuần",
    "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 13,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-014",
    "name": "Ẩm Thực Đường Phố Sài Gòn & Hà Nội",
    "slug": "street-food-snacks",
    "description": "Bánh tráng nướng, bắp xào bơ, phá lấu bò đặc sản đường phố",
    "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 14,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-015",
    "name": "Món Hấp Thanh Vị Dinh Dưỡng",
    "slug": "steamed-specialties",
    "description": "Cá chẽm hấp Hong Kong, gà hấp lá chanh giữ trọn dưỡng chất tự nhiên",
    "imageUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 15,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-016",
    "name": "Bánh Xèo & Bánh Khọt Giòn Rụm",
    "slug": "savory-pancakes",
    "description": "Bánh xèo vàng ươm nghệ tây ngập nhân tôm thịt cuốn cải xanh",
    "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 16,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-017",
    "name": "Trứng & Đậu Hũ Biến Tấu",
    "slug": "egg-tofu-delicacies",
    "description": "Đậu hũ sốt cà chua, trứng cuộn ngũ sắc mềm mịn thơm béo",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 17,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-018",
    "name": "Ẩm Thực Cay Nồng Miền Trung",
    "slug": "spicy-central-heritage",
    "description": "Bún bò Huế cay xé lưỡi, mì Quảng tôm thịt đậm đà hồn quê xứ Quảng",
    "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 18,
    "recipeCount": 6,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-019",
    "name": "Nước Chấm & Gia Vị Bí Truyền",
    "slug": "sauces-dips",
    "description": "Muối ớt xanh Nha Trang, sốt mắm chua ngọt sệt kẹo tỏi ớt",
    "imageUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 19,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-020",
    "name": "Dim Sum & Há Cảo Á Đông",
    "slug": "dim-sum-dumplings",
    "description": "Xíu mại tôm thịt, há cảo pha lê hấp xửng tre thơm phức ngào ngạt",
    "imageUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 20,
    "recipeCount": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-021",
    "name": "Mì Ý & Risotto Chuẩn Vị Ý",
    "slug": "italian-pasta-risotto",
    "description": "Spaghetti Carbonara sốt trứng béo ngậy, Risotto hải sản thảo mộc",
    "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 21,
    "recipeCount": 0,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-022",
    "name": "Ramen & Bento Nhật Bản",
    "slug": "japanese-ramen-donburi",
    "description": "Tonkotsu Ramen xương hầm 18 giờ, trứng ngâm tương Ajitsuke Tamago",
    "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 22,
    "recipeCount": 0,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-023",
    "name": "Cà Ri & Tom Yum Thái Lan",
    "slug": "thai-curries-tom-yum",
    "description": "Canh chua Tom Yum tôm sú cốt dừa cay nồng, cà ri xanh thơm lá chanh kaffir",
    "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 23,
    "recipeCount": 0,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  },
  {
    "id": "cat-024",
    "name": "Bò Bít Tết & Món Âu Hiện Đại",
    "slug": "modern-bistro-steaks",
    "description": "Ribeye Steak sốt tiêu đen nấm truffle, khoai tây nghiền bơ mịn",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "orderIndex": 24,
    "recipeCount": 0,
    "createdAt": "2026-01-01T00:00:00Z",
    "isDeleted": false
  }
];

export const SEED_RECIPES: Recipe[] = [
  {
    "id": "rec-001",
    "title": "Phở Bò Tái Lăn Hà Nội",
    "slug": "pho-bo-tai-lan-ha-noi-1",
    "description": "Bát phở thơm nức mùi gừng tỏi phi, thịt bò tái lăn mềm ngọt quyện cùng nước dùng ninh xương 12 giờ.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 20,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-001",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-07T10:00:00Z",
    "viewCount": 4693,
    "ratingAverage": 4.53,
    "ratingCount": 334,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 303,
      "protein": 24.4,
      "carbohydrates": 62.0,
      "fat": 21.4,
      "fiber": 5.7,
      "sodium": 596.9
    },
    "ingredients": [
      {
        "id": "ing-001-01",
        "recipeId": "rec-001",
        "name": "Giá đỗ tươi sạch",
        "quantity": 225.5,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 1
      },
      {
        "id": "ing-001-02",
        "recipeId": "rec-001",
        "name": "Gừng già tươi",
        "quantity": 105.9,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 2
      },
      {
        "id": "ing-001-03",
        "recipeId": "rec-001",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.7,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 3
      },
      {
        "id": "ing-001-04",
        "recipeId": "rec-001",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-001-05",
        "recipeId": "rec-001",
        "name": "Tỏi khô cô đơn",
        "quantity": 7.0,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 5
      },
      {
        "id": "ing-001-06",
        "recipeId": "rec-001",
        "name": "Thịt tôm sú tươi",
        "quantity": 403.4,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 6
      },
      {
        "id": "ing-001-07",
        "recipeId": "rec-001",
        "name": "Hành hoa & ngò rí",
        "quantity": 147.2,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 7
      },
      {
        "id": "ing-001-08",
        "recipeId": "rec-001",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 8
      },
      {
        "id": "ing-001-09",
        "recipeId": "rec-001",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 1.8,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 9
      },
      {
        "id": "ing-001-10",
        "recipeId": "rec-001",
        "name": "Rau xà lách mỡ",
        "quantity": 272.0,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 10
      },
      {
        "id": "ing-001-11",
        "recipeId": "rec-001",
        "name": "Hoa hồi khô",
        "quantity": 5.8,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 11
      },
      {
        "id": "ing-001-12",
        "recipeId": "rec-001",
        "name": "Rau răm tươi",
        "quantity": 53.1,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 12
      },
      {
        "id": "ing-001-13",
        "recipeId": "rec-001",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-001-01",
        "recipeId": "rec-001",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-001-02",
        "recipeId": "rec-001",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-001-03",
        "recipeId": "rec-001",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-001-04",
        "recipeId": "rec-001",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-001-05",
        "recipeId": "rec-001",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-001-06",
        "recipeId": "rec-001",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-001-07",
        "recipeId": "rec-001",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-001-01",
        "recipeId": "rec-001",
        "originalUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "altText": "Phở Bò Tái Lăn Hà Nội",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-002",
    "title": "Phở Gà Ta Hoa Hồi Lá Chanh",
    "slug": "pho-ga-ta-hoa-hoi-la-chanh-2",
    "description": "Nước dùng thanh trong óng vàng mỡ gà, thịt gà ta dai giòn thơm thoang thoảng mùi lá chanh tươi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 30,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-001",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-27T10:00:00Z",
    "viewCount": 10213,
    "ratingAverage": 4.71,
    "ratingCount": 202,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 738,
      "protein": 43.5,
      "carbohydrates": 45.2,
      "fat": 11.0,
      "fiber": 2.9,
      "sodium": 483.2
    },
    "ingredients": [
      {
        "id": "ing-002-01",
        "recipeId": "rec-002",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.2,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-002-02",
        "recipeId": "rec-002",
        "name": "Nấm hương khô thơm",
        "quantity": 46.4,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 2
      },
      {
        "id": "ing-002-03",
        "recipeId": "rec-002",
        "name": "Mè trắng rang thơm",
        "quantity": 28.4,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 3
      },
      {
        "id": "ing-002-04",
        "recipeId": "rec-002",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.3,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 4
      },
      {
        "id": "ing-002-05",
        "recipeId": "rec-002",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 5
      },
      {
        "id": "ing-002-06",
        "recipeId": "rec-002",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.1,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 6
      },
      {
        "id": "ing-002-07",
        "recipeId": "rec-002",
        "name": "Đường phèn kết tinh",
        "quantity": 33.4,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 7
      },
      {
        "id": "ing-002-08",
        "recipeId": "rec-002",
        "name": "Miến dong làng So",
        "quantity": 91.5,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 8
      },
      {
        "id": "ing-002-09",
        "recipeId": "rec-002",
        "name": "Hạt sen Huế tươi",
        "quantity": 170.8,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 9
      },
      {
        "id": "ing-002-10",
        "recipeId": "rec-002",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 0.9,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 10
      },
      {
        "id": "ing-002-11",
        "recipeId": "rec-002",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.6,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 11
      },
      {
        "id": "ing-002-12",
        "recipeId": "rec-002",
        "name": "Lạc rang đập dập",
        "quantity": 75.0,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-002-01",
        "recipeId": "rec-002",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-002-02",
        "recipeId": "rec-002",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-002-03",
        "recipeId": "rec-002",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-002-04",
        "recipeId": "rec-002",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-002-05",
        "recipeId": "rec-002",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-002-06",
        "recipeId": "rec-002",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-002-07",
        "recipeId": "rec-002",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-002-01",
        "recipeId": "rec-002",
        "originalUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "altText": "Phở Gà Ta Hoa Hồi Lá Chanh",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-003",
    "title": "Bún Thang Phố Cổ Cầu Kỳ",
    "slug": "bun-thang-pho-co-cau-ky-3",
    "description": "Bát bún tinh hoa đất Hà Thành với giò lụa, trứng tráng mỏng, thịt gà xé và chút tinh dầu cà cuống.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-001",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-02T10:00:00Z",
    "viewCount": 12302,
    "ratingAverage": 4.65,
    "ratingCount": 263,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 339,
      "protein": 25.7,
      "carbohydrates": 26.2,
      "fat": 13.4,
      "fiber": 3.7,
      "sodium": 1044.3
    },
    "ingredients": [
      {
        "id": "ing-003-01",
        "recipeId": "rec-003",
        "name": "Sả cây tươi thơm",
        "quantity": 7.0,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 1
      },
      {
        "id": "ing-003-02",
        "recipeId": "rec-003",
        "name": "Trứng gà ta tươi",
        "quantity": 2.8,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 2
      },
      {
        "id": "ing-003-03",
        "recipeId": "rec-003",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.1,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 3
      },
      {
        "id": "ing-003-04",
        "recipeId": "rec-003",
        "name": "Rau răm tươi",
        "quantity": 49.3,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 4
      },
      {
        "id": "ing-003-05",
        "recipeId": "rec-003",
        "name": "Đậu xanh xát vỏ",
        "quantity": 198.9,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 5
      },
      {
        "id": "ing-003-06",
        "recipeId": "rec-003",
        "name": "Quế thanh khô",
        "quantity": 2.1,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 6
      },
      {
        "id": "ing-003-07",
        "recipeId": "rec-003",
        "name": "Muối hạt tinh khiết",
        "quantity": 1.8,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 7
      },
      {
        "id": "ing-003-08",
        "recipeId": "rec-003",
        "name": "Rau húng quế & ngò gai",
        "quantity": 238.5,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 8
      },
      {
        "id": "ing-003-09",
        "recipeId": "rec-003",
        "name": "Hành tây củ lớn",
        "quantity": 2.4,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-003-10",
        "recipeId": "rec-003",
        "name": "Thảo quả khô",
        "quantity": 1.9,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-003-11",
        "recipeId": "rec-003",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 11
      },
      {
        "id": "ing-003-12",
        "recipeId": "rec-003",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-003-01",
        "recipeId": "rec-003",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-003-02",
        "recipeId": "rec-003",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-003-03",
        "recipeId": "rec-003",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-003-04",
        "recipeId": "rec-003",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-003-05",
        "recipeId": "rec-003",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-003-01",
        "recipeId": "rec-003",
        "originalUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "altText": "Bún Thang Phố Cổ Cầu Kỳ",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-004",
    "title": "Bún Riêu Cua Bắp Bò Sườn Sụn",
    "slug": "bun-rieu-cua-bap-bo-suon-sun-4",
    "description": "Nước dùng chua thanh vị giấm bỗng, riêu cua đồng béo ngậy ăn kèm rau sống hoa chuối bào.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-001",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-03T10:00:00Z",
    "viewCount": 10000,
    "ratingAverage": 4.61,
    "ratingCount": 130,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 744,
      "protein": 41.0,
      "carbohydrates": 71.4,
      "fat": 21.6,
      "fiber": 8.4,
      "sodium": 900.4
    },
    "ingredients": [
      {
        "id": "ing-004-01",
        "recipeId": "rec-004",
        "name": "Thịt nạc vai heo băm",
        "quantity": 307.1,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 1
      },
      {
        "id": "ing-004-02",
        "recipeId": "rec-004",
        "name": "Ớt hiểm tươi",
        "quantity": 4.0,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 2
      },
      {
        "id": "ing-004-03",
        "recipeId": "rec-004",
        "name": "Lá chanh non",
        "quantity": 10.9,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 3
      },
      {
        "id": "ing-004-04",
        "recipeId": "rec-004",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 4
      },
      {
        "id": "ing-004-05",
        "recipeId": "rec-004",
        "name": "Miến dong làng So",
        "quantity": 92.5,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 5
      },
      {
        "id": "ing-004-06",
        "recipeId": "rec-004",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.6,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 6
      },
      {
        "id": "ing-004-07",
        "recipeId": "rec-004",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 7
      },
      {
        "id": "ing-004-08",
        "recipeId": "rec-004",
        "name": "Rau răm tươi",
        "quantity": 54.3,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 8
      },
      {
        "id": "ing-004-09",
        "recipeId": "rec-004",
        "name": "Dấm gạo nếp thơm",
        "quantity": 51.2,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 9
      },
      {
        "id": "ing-004-10",
        "recipeId": "rec-004",
        "name": "Mộc nhĩ đen khô",
        "quantity": 42.6,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-004-11",
        "recipeId": "rec-004",
        "name": "Rau húng quế & ngò gai",
        "quantity": 225.7,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 11
      },
      {
        "id": "ing-004-12",
        "recipeId": "rec-004",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.7,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 12
      },
      {
        "id": "ing-004-13",
        "recipeId": "rec-004",
        "name": "Trứng gà ta tươi",
        "quantity": 3.6,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-004-01",
        "recipeId": "rec-004",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-004-02",
        "recipeId": "rec-004",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-004-03",
        "recipeId": "rec-004",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-004-04",
        "recipeId": "rec-004",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-004-05",
        "recipeId": "rec-004",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-004-06",
        "recipeId": "rec-004",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-004-07",
        "recipeId": "rec-004",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-004-01",
        "recipeId": "rec-004",
        "originalUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
        "altText": "Bún Riêu Cua Bắp Bò Sườn Sụn",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-005",
    "title": "Bún Bò Huế Chân Giò Sa Tế",
    "slug": "bun-bo-hue-chan-gio-sa-te-5",
    "description": "Sợi bún to tròn trong làn nước dùng thơm nồng sả ớt, chả cua và tiết luộc mềm mọng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 90,
    "servings": 8,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-018",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-07T10:00:00Z",
    "viewCount": 14865,
    "ratingAverage": 4.8,
    "ratingCount": 91,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 526,
      "protein": 30.2,
      "carbohydrates": 48.8,
      "fat": 19.3,
      "fiber": 4.6,
      "sodium": 1019.0
    },
    "ingredients": [
      {
        "id": "ing-005-01",
        "recipeId": "rec-005",
        "name": "Thảo quả khô",
        "quantity": 2.1,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-005-02",
        "recipeId": "rec-005",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 50.1,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 2
      },
      {
        "id": "ing-005-03",
        "recipeId": "rec-005",
        "name": "Lạc rang đập dập",
        "quantity": 82.7,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 3
      },
      {
        "id": "ing-005-04",
        "recipeId": "rec-005",
        "name": "Đường phèn kết tinh",
        "quantity": 31.5,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 4
      },
      {
        "id": "ing-005-05",
        "recipeId": "rec-005",
        "name": "Tỏi khô cô đơn",
        "quantity": 5.5,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 5
      },
      {
        "id": "ing-005-06",
        "recipeId": "rec-005",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 6
      },
      {
        "id": "ing-005-07",
        "recipeId": "rec-005",
        "name": "Mộc nhĩ đen khô",
        "quantity": 36.2,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-005-08",
        "recipeId": "rec-005",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 8
      },
      {
        "id": "ing-005-09",
        "recipeId": "rec-005",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 9
      },
      {
        "id": "ing-005-10",
        "recipeId": "rec-005",
        "name": "Nấm hương khô thơm",
        "quantity": 51.5,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-005-01",
        "recipeId": "rec-005",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-005-02",
        "recipeId": "rec-005",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-005-03",
        "recipeId": "rec-005",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-005-04",
        "recipeId": "rec-005",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-005-05",
        "recipeId": "rec-005",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-005-06",
        "recipeId": "rec-005",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-005-07",
        "recipeId": "rec-005",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-005-01",
        "recipeId": "rec-005",
        "originalUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "altText": "Bún Bò Huế Chân Giò Sa Tế",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-006",
    "title": "Cá Kho Tộ Ba Chỉ Đậm Vị",
    "slug": "ca-kho-to-ba-chi-dam-vi-6",
    "description": "Cá lóc đồng kho tiêu trong tộ đất liu riu, thịt ba chỉ tươm mỡ óng ánh nước hàng cánh gián.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-002",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-08T10:00:00Z",
    "viewCount": 16714,
    "ratingAverage": 4.5,
    "ratingCount": 357,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 450,
      "protein": 44.8,
      "carbohydrates": 76.6,
      "fat": 18.7,
      "fiber": 4.3,
      "sodium": 907.8
    },
    "ingredients": [
      {
        "id": "ing-006-01",
        "recipeId": "rec-006",
        "name": "Thịt nạc vai heo băm",
        "quantity": 301.2,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 1
      },
      {
        "id": "ing-006-02",
        "recipeId": "rec-006",
        "name": "Sả cây tươi thơm",
        "quantity": 6.6,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 2
      },
      {
        "id": "ing-006-03",
        "recipeId": "rec-006",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 0.9,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 3
      },
      {
        "id": "ing-006-04",
        "recipeId": "rec-006",
        "name": "Đường phèn kết tinh",
        "quantity": 35.6,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 4
      },
      {
        "id": "ing-006-05",
        "recipeId": "rec-006",
        "name": "Đậu xanh xát vỏ",
        "quantity": 233.6,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 5
      },
      {
        "id": "ing-006-06",
        "recipeId": "rec-006",
        "name": "Rau xà lách mỡ",
        "quantity": 357.3,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 6
      },
      {
        "id": "ing-006-07",
        "recipeId": "rec-006",
        "name": "Hoa hồi khô",
        "quantity": 5.6,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 7
      },
      {
        "id": "ing-006-08",
        "recipeId": "rec-006",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 49.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 8
      },
      {
        "id": "ing-006-09",
        "recipeId": "rec-006",
        "name": "Ớt hiểm tươi",
        "quantity": 4.8,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-006-10",
        "recipeId": "rec-006",
        "name": "Thịt tôm sú tươi",
        "quantity": 364.1,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 10
      },
      {
        "id": "ing-006-11",
        "recipeId": "rec-006",
        "name": "Miến dong làng So",
        "quantity": 94.2,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 11
      },
      {
        "id": "ing-006-12",
        "recipeId": "rec-006",
        "name": "Nấm hương khô thơm",
        "quantity": 47.3,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 12
      },
      {
        "id": "ing-006-13",
        "recipeId": "rec-006",
        "name": "Hành tây củ lớn",
        "quantity": 1.8,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-006-01",
        "recipeId": "rec-006",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-006-02",
        "recipeId": "rec-006",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-006-03",
        "recipeId": "rec-006",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-006-04",
        "recipeId": "rec-006",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-006-05",
        "recipeId": "rec-006",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-006-06",
        "recipeId": "rec-006",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-006-07",
        "recipeId": "rec-006",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-006-01",
        "recipeId": "rec-006",
        "originalUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "altText": "Cá Kho Tộ Ba Chỉ Đậm Vị",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-007",
    "title": "Thịt Kho Tàu Trứng Cút Nước Dừa",
    "slug": "thit-kho-tau-trung-cut-nuoc-dua-7",
    "description": "Từng miếng thịt ba chỉ vuông vức mềm tan trong miệng, trứng cút ngấm trọn vị ngọt thanh của nước dừa xiêm.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 20,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-002",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-27T10:00:00Z",
    "viewCount": 12227,
    "ratingAverage": 4.86,
    "ratingCount": 313,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 344,
      "protein": 51.0,
      "carbohydrates": 38.5,
      "fat": 30.9,
      "fiber": 6.6,
      "sodium": 906.0
    },
    "ingredients": [
      {
        "id": "ing-007-01",
        "recipeId": "rec-007",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.4,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 1
      },
      {
        "id": "ing-007-02",
        "recipeId": "rec-007",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.4,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 2
      },
      {
        "id": "ing-007-03",
        "recipeId": "rec-007",
        "name": "Gừng già tươi",
        "quantity": 119.2,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 3
      },
      {
        "id": "ing-007-04",
        "recipeId": "rec-007",
        "name": "Mộc nhĩ đen khô",
        "quantity": 41.4,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-007-05",
        "recipeId": "rec-007",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 5
      },
      {
        "id": "ing-007-06",
        "recipeId": "rec-007",
        "name": "Nấm hương khô thơm",
        "quantity": 47.5,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 6
      },
      {
        "id": "ing-007-07",
        "recipeId": "rec-007",
        "name": "Rau húng quế & ngò gai",
        "quantity": 205.4,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 7
      },
      {
        "id": "ing-007-08",
        "recipeId": "rec-007",
        "name": "Hoa hồi khô",
        "quantity": 5.3,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 8
      },
      {
        "id": "ing-007-09",
        "recipeId": "rec-007",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.2,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 9
      },
      {
        "id": "ing-007-10",
        "recipeId": "rec-007",
        "name": "Hành tây củ lớn",
        "quantity": 2.2,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-007-11",
        "recipeId": "rec-007",
        "name": "Hành hoa & ngò rí",
        "quantity": 175.7,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 11
      },
      {
        "id": "ing-007-12",
        "recipeId": "rec-007",
        "name": "Trứng gà ta tươi",
        "quantity": 2.9,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 12
      },
      {
        "id": "ing-007-13",
        "recipeId": "rec-007",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 59.5,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-007-01",
        "recipeId": "rec-007",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-007-02",
        "recipeId": "rec-007",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-007-03",
        "recipeId": "rec-007",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-007-04",
        "recipeId": "rec-007",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-007-05",
        "recipeId": "rec-007",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-007-01",
        "recipeId": "rec-007",
        "originalUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "altText": "Thịt Kho Tàu Trứng Cút Nước Dừa",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-008",
    "title": "Sườn Non Kho Tiêu Xanh Phú Quốc",
    "slug": "suon-non-kho-tieu-xanh-phu-quoc-8",
    "description": "Sườn non róc xương rim đậm vị mặn ngọt cay nồng từ những chùm tiêu xanh tươi mọng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-002",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 3885,
    "ratingAverage": 4.59,
    "ratingCount": 16,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 548,
      "protein": 24.4,
      "carbohydrates": 84.6,
      "fat": 10.6,
      "fiber": 5.9,
      "sodium": 849.7
    },
    "ingredients": [
      {
        "id": "ing-008-01",
        "recipeId": "rec-008",
        "name": "Dầu thực vật cao cấp",
        "quantity": 51.4,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 1
      },
      {
        "id": "ing-008-02",
        "recipeId": "rec-008",
        "name": "Rau xà lách mỡ",
        "quantity": 275.0,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 2
      },
      {
        "id": "ing-008-03",
        "recipeId": "rec-008",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 3
      },
      {
        "id": "ing-008-04",
        "recipeId": "rec-008",
        "name": "Trứng gà ta tươi",
        "quantity": 3.1,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 4
      },
      {
        "id": "ing-008-05",
        "recipeId": "rec-008",
        "name": "Chanh tươi mọng nước",
        "quantity": 1.8,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 5
      },
      {
        "id": "ing-008-06",
        "recipeId": "rec-008",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 6
      },
      {
        "id": "ing-008-07",
        "recipeId": "rec-008",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.7,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 7
      },
      {
        "id": "ing-008-08",
        "recipeId": "rec-008",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 0.9,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 8
      },
      {
        "id": "ing-008-09",
        "recipeId": "rec-008",
        "name": "Muối hạt tinh khiết",
        "quantity": 1.9,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 9
      },
      {
        "id": "ing-008-10",
        "recipeId": "rec-008",
        "name": "Sả cây tươi thơm",
        "quantity": 5.9,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 10
      },
      {
        "id": "ing-008-11",
        "recipeId": "rec-008",
        "name": "Mè trắng rang thơm",
        "quantity": 33.3,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-008-01",
        "recipeId": "rec-008",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-008-02",
        "recipeId": "rec-008",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-008-03",
        "recipeId": "rec-008",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-008-04",
        "recipeId": "rec-008",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-008-05",
        "recipeId": "rec-008",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-008-01",
        "recipeId": "rec-008",
        "originalUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "altText": "Sườn Non Kho Tiêu Xanh Phú Quốc",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-009",
    "title": "Bò Kho Tiêu Đen Bánh Mì Nóng",
    "slug": "bo-kho-tieu-den-banh-mi-nong-9",
    "description": "Nạm bò hầm mềm cùng cà rốt và quế hồi, nước sốt sánh mịn chấm bánh mì giòn rụm.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 60,
    "servings": 8,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-002",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 15282,
    "ratingAverage": 4.85,
    "ratingCount": 279,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 427,
      "protein": 45.6,
      "carbohydrates": 48.8,
      "fat": 24.6,
      "fiber": 5.7,
      "sodium": 1017.7
    },
    "ingredients": [
      {
        "id": "ing-009-01",
        "recipeId": "rec-009",
        "name": "Thịt nạc vai heo băm",
        "quantity": 350.0,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 1
      },
      {
        "id": "ing-009-02",
        "recipeId": "rec-009",
        "name": "Nấm hương khô thơm",
        "quantity": 57.9,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 2
      },
      {
        "id": "ing-009-03",
        "recipeId": "rec-009",
        "name": "Hạt sen Huế tươi",
        "quantity": 138.1,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 3
      },
      {
        "id": "ing-009-04",
        "recipeId": "rec-009",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 57.0,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 4
      },
      {
        "id": "ing-009-05",
        "recipeId": "rec-009",
        "name": "Thảo quả khô",
        "quantity": 2.3,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-009-06",
        "recipeId": "rec-009",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 6
      },
      {
        "id": "ing-009-07",
        "recipeId": "rec-009",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-009-08",
        "recipeId": "rec-009",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 8
      },
      {
        "id": "ing-009-09",
        "recipeId": "rec-009",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.1,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-009-10",
        "recipeId": "rec-009",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.3,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-009-01",
        "recipeId": "rec-009",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-009-02",
        "recipeId": "rec-009",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-009-03",
        "recipeId": "rec-009",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-009-04",
        "recipeId": "rec-009",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-009-05",
        "recipeId": "rec-009",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-009-06",
        "recipeId": "rec-009",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-009-01",
        "recipeId": "rec-009",
        "originalUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "altText": "Bò Kho Tiêu Đen Bánh Mì Nóng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-010",
    "title": "Gà Kho Gừng Nồi Đất",
    "slug": "ga-kho-gung-noi-dat-10",
    "description": "Gà ta chặt miếng vừa ăn kho thơm nức mũi mùi gừng tươi già, đưa cơm ngày mưa se lạnh.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-002",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-10T10:00:00Z",
    "viewCount": 5740,
    "ratingAverage": 4.7,
    "ratingCount": 216,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 728,
      "protein": 23.0,
      "carbohydrates": 25.4,
      "fat": 18.1,
      "fiber": 2.8,
      "sodium": 547.1
    },
    "ingredients": [
      {
        "id": "ing-010-01",
        "recipeId": "rec-010",
        "name": "Sả cây tươi thơm",
        "quantity": 7.2,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 1
      },
      {
        "id": "ing-010-02",
        "recipeId": "rec-010",
        "name": "Nấm hương khô thơm",
        "quantity": 47.8,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 2
      },
      {
        "id": "ing-010-03",
        "recipeId": "rec-010",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.4,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 3
      },
      {
        "id": "ing-010-04",
        "recipeId": "rec-010",
        "name": "Dầu thực vật cao cấp",
        "quantity": 51.6,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 4
      },
      {
        "id": "ing-010-05",
        "recipeId": "rec-010",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 5
      },
      {
        "id": "ing-010-06",
        "recipeId": "rec-010",
        "name": "Bột năng tinh chế",
        "quantity": 104.4,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 6
      },
      {
        "id": "ing-010-07",
        "recipeId": "rec-010",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 51.1,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 7
      },
      {
        "id": "ing-010-08",
        "recipeId": "rec-010",
        "name": "Thịt nạc vai heo băm",
        "quantity": 278.6,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 8
      },
      {
        "id": "ing-010-09",
        "recipeId": "rec-010",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.4,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 9
      },
      {
        "id": "ing-010-10",
        "recipeId": "rec-010",
        "name": "Thịt tôm sú tươi",
        "quantity": 361.9,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-010-01",
        "recipeId": "rec-010",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-010-02",
        "recipeId": "rec-010",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-010-03",
        "recipeId": "rec-010",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-010-04",
        "recipeId": "rec-010",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-010-05",
        "recipeId": "rec-010",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-010-06",
        "recipeId": "rec-010",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-010-01",
        "recipeId": "rec-010",
        "originalUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        "altText": "Gà Kho Gừng Nồi Đất",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-011",
    "title": "Nem Rán Hà Nội Giòn Rụm",
    "slug": "nem-ran-ha-noi-gion-rum-11",
    "description": "Vỏ nem giòn rụm bọc nhân thịt nạc vai băm, mộc nhĩ nấm hương, miến dong và trứng gà.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 20,
    "servings": 6,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-003",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-15T10:00:00Z",
    "viewCount": 1752,
    "ratingAverage": 4.41,
    "ratingCount": 217,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 703,
      "protein": 18.6,
      "carbohydrates": 65.1,
      "fat": 29.6,
      "fiber": 2.6,
      "sodium": 823.0
    },
    "ingredients": [
      {
        "id": "ing-011-01",
        "recipeId": "rec-011",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 1
      },
      {
        "id": "ing-011-02",
        "recipeId": "rec-011",
        "name": "Hoa hồi khô",
        "quantity": 5.3,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 2
      },
      {
        "id": "ing-011-03",
        "recipeId": "rec-011",
        "name": "Trứng gà ta tươi",
        "quantity": 2.9,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 3
      },
      {
        "id": "ing-011-04",
        "recipeId": "rec-011",
        "name": "Lạc rang đập dập",
        "quantity": 93.9,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 4
      },
      {
        "id": "ing-011-05",
        "recipeId": "rec-011",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.3,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 5
      },
      {
        "id": "ing-011-06",
        "recipeId": "rec-011",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 6
      },
      {
        "id": "ing-011-07",
        "recipeId": "rec-011",
        "name": "Rau xà lách mỡ",
        "quantity": 323.2,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 7
      },
      {
        "id": "ing-011-08",
        "recipeId": "rec-011",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.1,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 8
      },
      {
        "id": "ing-011-09",
        "recipeId": "rec-011",
        "name": "Thịt nạc vai heo băm",
        "quantity": 345.2,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 9
      },
      {
        "id": "ing-011-10",
        "recipeId": "rec-011",
        "name": "Mè trắng rang thơm",
        "quantity": 32.0,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 10
      },
      {
        "id": "ing-011-11",
        "recipeId": "rec-011",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-011-01",
        "recipeId": "rec-011",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-011-02",
        "recipeId": "rec-011",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-011-03",
        "recipeId": "rec-011",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-011-04",
        "recipeId": "rec-011",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-011-05",
        "recipeId": "rec-011",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-011-01",
        "recipeId": "rec-011",
        "originalUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "altText": "Nem Rán Hà Nội Giòn Rụm",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-012",
    "title": "Chả Giò Rế Tôm Cua Cà Mau",
    "slug": "cha-gio-re-tom-cua-ca-mau-12",
    "description": "Lớp bánh tráng rế vàng óng giòn tan ôm trọn phần nhân tôm đất và thịt cua biển ngọt lịm.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 60,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-003",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-16T10:00:00Z",
    "viewCount": 12544,
    "ratingAverage": 4.76,
    "ratingCount": 54,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 511,
      "protein": 43.4,
      "carbohydrates": 62.3,
      "fat": 25.2,
      "fiber": 2.5,
      "sodium": 590.1
    },
    "ingredients": [
      {
        "id": "ing-012-01",
        "recipeId": "rec-012",
        "name": "Hành tây củ lớn",
        "quantity": 2.2,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-012-02",
        "recipeId": "rec-012",
        "name": "Đường phèn kết tinh",
        "quantity": 34.9,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 2
      },
      {
        "id": "ing-012-03",
        "recipeId": "rec-012",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 3
      },
      {
        "id": "ing-012-04",
        "recipeId": "rec-012",
        "name": "Thịt thăn bò tươi",
        "quantity": 543.2,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 4
      },
      {
        "id": "ing-012-05",
        "recipeId": "rec-012",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.3,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 5
      },
      {
        "id": "ing-012-06",
        "recipeId": "rec-012",
        "name": "Rau húng quế & ngò gai",
        "quantity": 208.9,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 6
      },
      {
        "id": "ing-012-07",
        "recipeId": "rec-012",
        "name": "Rau răm tươi",
        "quantity": 55.0,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 7
      },
      {
        "id": "ing-012-08",
        "recipeId": "rec-012",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 265.4,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 8
      },
      {
        "id": "ing-012-09",
        "recipeId": "rec-012",
        "name": "Đậu xanh xát vỏ",
        "quantity": 199.4,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 9
      },
      {
        "id": "ing-012-10",
        "recipeId": "rec-012",
        "name": "Nấm hương khô thơm",
        "quantity": 58.8,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 10
      },
      {
        "id": "ing-012-11",
        "recipeId": "rec-012",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 0.9,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-012-01",
        "recipeId": "rec-012",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-012-02",
        "recipeId": "rec-012",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-012-03",
        "recipeId": "rec-012",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-012-04",
        "recipeId": "rec-012",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-012-05",
        "recipeId": "rec-012",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-012-06",
        "recipeId": "rec-012",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-012-07",
        "recipeId": "rec-012",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-012-01",
        "recipeId": "rec-012",
        "originalUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "altText": "Chả Giò Rế Tôm Cua Cà Mau",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-013",
    "title": "Chạo Tôm Bọc Cây Mía Nướng",
    "slug": "chao-tom-boc-cay-mia-nuong-13",
    "description": "Thịt tôm quết dẻo dai bọc quanh gióng mía tím ngọt ngào nướng trên than hoa đượm lửa.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 60,
    "servings": 8,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-003",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-15T10:00:00Z",
    "viewCount": 4427,
    "ratingAverage": 4.48,
    "ratingCount": 99,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 323,
      "protein": 25.6,
      "carbohydrates": 25.3,
      "fat": 26.9,
      "fiber": 7.8,
      "sodium": 514.6
    },
    "ingredients": [
      {
        "id": "ing-013-01",
        "recipeId": "rec-013",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-013-02",
        "recipeId": "rec-013",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 2
      },
      {
        "id": "ing-013-03",
        "recipeId": "rec-013",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 58.7,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 3
      },
      {
        "id": "ing-013-04",
        "recipeId": "rec-013",
        "name": "Đậu xanh xát vỏ",
        "quantity": 220.3,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 4
      },
      {
        "id": "ing-013-05",
        "recipeId": "rec-013",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 5
      },
      {
        "id": "ing-013-06",
        "recipeId": "rec-013",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 6
      },
      {
        "id": "ing-013-07",
        "recipeId": "rec-013",
        "name": "Hạt sen Huế tươi",
        "quantity": 168.8,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 7
      },
      {
        "id": "ing-013-08",
        "recipeId": "rec-013",
        "name": "Nấm hương khô thơm",
        "quantity": 47.1,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 8
      },
      {
        "id": "ing-013-09",
        "recipeId": "rec-013",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.3,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 9
      },
      {
        "id": "ing-013-10",
        "recipeId": "rec-013",
        "name": "Trứng gà ta tươi",
        "quantity": 2.8,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 10
      },
      {
        "id": "ing-013-11",
        "recipeId": "rec-013",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 11
      },
      {
        "id": "ing-013-12",
        "recipeId": "rec-013",
        "name": "Mộc nhĩ đen khô",
        "quantity": 37.7,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-013-01",
        "recipeId": "rec-013",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-013-02",
        "recipeId": "rec-013",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-013-03",
        "recipeId": "rec-013",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-013-04",
        "recipeId": "rec-013",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-013-05",
        "recipeId": "rec-013",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-013-06",
        "recipeId": "rec-013",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-013-07",
        "recipeId": "rec-013",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-013-01",
        "recipeId": "rec-013",
        "originalUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "altText": "Chạo Tôm Bọc Cây Mía Nướng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-014",
    "title": "Cánh Gà Chiên Nước Mắm Tỏi Ớt",
    "slug": "canh-ga-chien-nuoc-mam-toi-ot-14",
    "description": "Lớp da gà chiên giòn tan ngào đẫm sốt nước mắm chua cay mặn ngọt sóng sánh óng ả.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 20,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-003",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-23T10:00:00Z",
    "viewCount": 1481,
    "ratingAverage": 4.83,
    "ratingCount": 187,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 454,
      "protein": 19.3,
      "carbohydrates": 69.9,
      "fat": 23.8,
      "fiber": 2.9,
      "sodium": 931.6
    },
    "ingredients": [
      {
        "id": "ing-014-01",
        "recipeId": "rec-014",
        "name": "Hành tây củ lớn",
        "quantity": 2.1,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-014-02",
        "recipeId": "rec-014",
        "name": "Mè trắng rang thơm",
        "quantity": 29.8,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 2
      },
      {
        "id": "ing-014-03",
        "recipeId": "rec-014",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 3
      },
      {
        "id": "ing-014-04",
        "recipeId": "rec-014",
        "name": "Rau húng quế & ngò gai",
        "quantity": 237.7,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 4
      },
      {
        "id": "ing-014-05",
        "recipeId": "rec-014",
        "name": "Dấm gạo nếp thơm",
        "quantity": 56.1,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 5
      },
      {
        "id": "ing-014-06",
        "recipeId": "rec-014",
        "name": "Lá chanh non",
        "quantity": 9.9,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 6
      },
      {
        "id": "ing-014-07",
        "recipeId": "rec-014",
        "name": "Đường phèn kết tinh",
        "quantity": 30.1,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 7
      },
      {
        "id": "ing-014-08",
        "recipeId": "rec-014",
        "name": "Thịt nạc vai heo băm",
        "quantity": 311.3,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 8
      },
      {
        "id": "ing-014-09",
        "recipeId": "rec-014",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 0.9,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 9
      },
      {
        "id": "ing-014-10",
        "recipeId": "rec-014",
        "name": "Su hào tươi",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-014-11",
        "recipeId": "rec-014",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.4,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 11
      },
      {
        "id": "ing-014-12",
        "recipeId": "rec-014",
        "name": "Hoa hồi khô",
        "quantity": 5.7,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 12
      },
      {
        "id": "ing-014-13",
        "recipeId": "rec-014",
        "name": "Rau răm tươi",
        "quantity": 54.6,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-014-01",
        "recipeId": "rec-014",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-014-02",
        "recipeId": "rec-014",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-014-03",
        "recipeId": "rec-014",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-014-04",
        "recipeId": "rec-014",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-014-05",
        "recipeId": "rec-014",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-014-06",
        "recipeId": "rec-014",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-014-07",
        "recipeId": "rec-014",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-014-01",
        "recipeId": "rec-014",
        "originalUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "altText": "Cánh Gà Chiên Nước Mắm Tỏi Ớt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-015",
    "title": "Mực Chiên Giòn Sốt Mayonnaise Wasabi",
    "slug": "muc-chien-gion-sot-mayonnaise-wasabi-15",
    "description": "Khoanh mực tươi bao bột giòn rụm chấm cùng sốt béo ngậy the the kích thích vị giác.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 45,
    "servings": 2,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-003",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-12T10:00:00Z",
    "viewCount": 5567,
    "ratingAverage": 4.84,
    "ratingCount": 18,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 613,
      "protein": 24.0,
      "carbohydrates": 27.7,
      "fat": 33.8,
      "fiber": 6.8,
      "sodium": 601.7
    },
    "ingredients": [
      {
        "id": "ing-015-01",
        "recipeId": "rec-015",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 0.9,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 1
      },
      {
        "id": "ing-015-02",
        "recipeId": "rec-015",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.9,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 2
      },
      {
        "id": "ing-015-03",
        "recipeId": "rec-015",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.6,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 3
      },
      {
        "id": "ing-015-04",
        "recipeId": "rec-015",
        "name": "Dấm gạo nếp thơm",
        "quantity": 55.4,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 4
      },
      {
        "id": "ing-015-05",
        "recipeId": "rec-015",
        "name": "Thịt thăn bò tươi",
        "quantity": 538.4,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 5
      },
      {
        "id": "ing-015-06",
        "recipeId": "rec-015",
        "name": "Đậu xanh xát vỏ",
        "quantity": 219.0,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 6
      },
      {
        "id": "ing-015-07",
        "recipeId": "rec-015",
        "name": "Mộc nhĩ đen khô",
        "quantity": 45.3,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-015-08",
        "recipeId": "rec-015",
        "name": "Hạt sen Huế tươi",
        "quantity": 169.4,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 8
      },
      {
        "id": "ing-015-09",
        "recipeId": "rec-015",
        "name": "Su hào tươi",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-015-10",
        "recipeId": "rec-015",
        "name": "Hoa hồi khô",
        "quantity": 5.2,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-015-01",
        "recipeId": "rec-015",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-015-02",
        "recipeId": "rec-015",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-015-03",
        "recipeId": "rec-015",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-015-04",
        "recipeId": "rec-015",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-015-05",
        "recipeId": "rec-015",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-015-06",
        "recipeId": "rec-015",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-015-01",
        "recipeId": "rec-015",
        "originalUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        "altText": "Mực Chiên Giòn Sốt Mayonnaise Wasabi",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-016",
    "title": "Cơm Tấm Sườn Bì Chả Sài Gòn",
    "slug": "com-tam-suon-bi-cha-sai-gon-16",
    "description": "Đĩa cơm tấm chuẩn vị Nam Bộ với sườn nướng mỡ hành, chả trứng hấp béo bùi và bì heo giòn dai.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 30,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-004",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-26T10:00:00Z",
    "viewCount": 12586,
    "ratingAverage": 4.81,
    "ratingCount": 180,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 465,
      "protein": 26.1,
      "carbohydrates": 81.9,
      "fat": 18.7,
      "fiber": 4.1,
      "sodium": 993.2
    },
    "ingredients": [
      {
        "id": "ing-016-01",
        "recipeId": "rec-016",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-016-02",
        "recipeId": "rec-016",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 54.2,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 2
      },
      {
        "id": "ing-016-03",
        "recipeId": "rec-016",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 47.7,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 3
      },
      {
        "id": "ing-016-04",
        "recipeId": "rec-016",
        "name": "Thảo quả khô",
        "quantity": 1.9,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-016-05",
        "recipeId": "rec-016",
        "name": "Rau răm tươi",
        "quantity": 52.6,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 5
      },
      {
        "id": "ing-016-06",
        "recipeId": "rec-016",
        "name": "Nấm hương khô thơm",
        "quantity": 56.8,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 6
      },
      {
        "id": "ing-016-07",
        "recipeId": "rec-016",
        "name": "Mộc nhĩ đen khô",
        "quantity": 46.1,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-016-08",
        "recipeId": "rec-016",
        "name": "Trứng gà ta tươi",
        "quantity": 2.9,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 8
      },
      {
        "id": "ing-016-09",
        "recipeId": "rec-016",
        "name": "Lá chanh non",
        "quantity": 11.9,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 9
      },
      {
        "id": "ing-016-10",
        "recipeId": "rec-016",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-016-01",
        "recipeId": "rec-016",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-016-02",
        "recipeId": "rec-016",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-016-03",
        "recipeId": "rec-016",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-016-04",
        "recipeId": "rec-016",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-016-05",
        "recipeId": "rec-016",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-016-01",
        "recipeId": "rec-016",
        "originalUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "altText": "Cơm Tấm Sườn Bì Chả Sài Gòn",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-017",
    "title": "Cơm Chiên Dương Châu Hải Sản",
    "slug": "com-chien-duong-chau-hai-san-17",
    "description": "Hạt cơm săn bóng vàng ươm tơi xốp quyện cùng lạp xưởng tôm sú tươi và đậu Hà Lan giòn ngọt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 60,
    "servings": 8,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-004",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-08T10:00:00Z",
    "viewCount": 16095,
    "ratingAverage": 4.89,
    "ratingCount": 295,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 611,
      "protein": 31.5,
      "carbohydrates": 44.0,
      "fat": 26.2,
      "fiber": 5.6,
      "sodium": 539.1
    },
    "ingredients": [
      {
        "id": "ing-017-01",
        "recipeId": "rec-017",
        "name": "Thịt thăn bò tươi",
        "quantity": 478.8,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 1
      },
      {
        "id": "ing-017-02",
        "recipeId": "rec-017",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 1.9,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 2
      },
      {
        "id": "ing-017-03",
        "recipeId": "rec-017",
        "name": "Nấm hương khô thơm",
        "quantity": 53.8,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 3
      },
      {
        "id": "ing-017-04",
        "recipeId": "rec-017",
        "name": "Giá đỗ tươi sạch",
        "quantity": 221.1,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 4
      },
      {
        "id": "ing-017-05",
        "recipeId": "rec-017",
        "name": "Sả cây tươi thơm",
        "quantity": 6.7,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 5
      },
      {
        "id": "ing-017-06",
        "recipeId": "rec-017",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 6
      },
      {
        "id": "ing-017-07",
        "recipeId": "rec-017",
        "name": "Dầu thực vật cao cấp",
        "quantity": 56.0,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 7
      },
      {
        "id": "ing-017-08",
        "recipeId": "rec-017",
        "name": "Rau húng quế & ngò gai",
        "quantity": 238.8,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 8
      },
      {
        "id": "ing-017-09",
        "recipeId": "rec-017",
        "name": "Bột năng tinh chế",
        "quantity": 90.5,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 9
      },
      {
        "id": "ing-017-10",
        "recipeId": "rec-017",
        "name": "Thảo quả khô",
        "quantity": 2.3,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-017-01",
        "recipeId": "rec-017",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-017-02",
        "recipeId": "rec-017",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-017-03",
        "recipeId": "rec-017",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-017-04",
        "recipeId": "rec-017",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-017-05",
        "recipeId": "rec-017",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-017-06",
        "recipeId": "rec-017",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-017-07",
        "recipeId": "rec-017",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-017-01",
        "recipeId": "rec-017",
        "originalUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "altText": "Cơm Chiên Dương Châu Hải Sản",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-018",
    "title": "Cơm Chiên Cá Mặn Gà Xé Tay",
    "slug": "com-chien-ca-man-ga-xe-tay-18",
    "description": "Vị mằn mặn đặc trưng của khô cá chẽm hòa cùng thịt gà ta xé sợi và cơm chiên lửa lớn thơm khói.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 45,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-004",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-15T10:00:00Z",
    "viewCount": 7252,
    "ratingAverage": 4.5,
    "ratingCount": 352,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 456,
      "protein": 22.0,
      "carbohydrates": 47.7,
      "fat": 9.5,
      "fiber": 2.1,
      "sodium": 578.1
    },
    "ingredients": [
      {
        "id": "ing-018-01",
        "recipeId": "rec-018",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.4,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 1
      },
      {
        "id": "ing-018-02",
        "recipeId": "rec-018",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 2
      },
      {
        "id": "ing-018-03",
        "recipeId": "rec-018",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 48.7,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 3
      },
      {
        "id": "ing-018-04",
        "recipeId": "rec-018",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-018-05",
        "recipeId": "rec-018",
        "name": "Rau húng quế & ngò gai",
        "quantity": 205.4,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 5
      },
      {
        "id": "ing-018-06",
        "recipeId": "rec-018",
        "name": "Đường phèn kết tinh",
        "quantity": 31.7,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 6
      },
      {
        "id": "ing-018-07",
        "recipeId": "rec-018",
        "name": "Mộc nhĩ đen khô",
        "quantity": 36.9,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-018-08",
        "recipeId": "rec-018",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.3,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 8
      },
      {
        "id": "ing-018-09",
        "recipeId": "rec-018",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-018-10",
        "recipeId": "rec-018",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 270.6,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 10
      },
      {
        "id": "ing-018-11",
        "recipeId": "rec-018",
        "name": "Miến dong làng So",
        "quantity": 97.3,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 11
      },
      {
        "id": "ing-018-12",
        "recipeId": "rec-018",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.6,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-018-01",
        "recipeId": "rec-018",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-018-02",
        "recipeId": "rec-018",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-018-03",
        "recipeId": "rec-018",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-018-04",
        "recipeId": "rec-018",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-018-05",
        "recipeId": "rec-018",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-018-01",
        "recipeId": "rec-018",
        "originalUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "altText": "Cơm Chiên Cá Mặn Gà Xé Tay",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-019",
    "title": "Cơm Niêu Cháy Giòn Sốt Thịt Kho",
    "slug": "com-nieu-chay-gion-sot-thit-kho-19",
    "description": "Lớp cháy vàng ruộm giòn tan đáy niêu ăn kèm thịt kho tộ rưới thìa nước sốt bốc khói nghi ngút.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 20,
    "servings": 2,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-004",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-23T10:00:00Z",
    "viewCount": 4779,
    "ratingAverage": 4.85,
    "ratingCount": 66,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 535,
      "protein": 26.7,
      "carbohydrates": 71.8,
      "fat": 17.5,
      "fiber": 4.2,
      "sodium": 547.4
    },
    "ingredients": [
      {
        "id": "ing-019-01",
        "recipeId": "rec-019",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 57.5,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 1
      },
      {
        "id": "ing-019-02",
        "recipeId": "rec-019",
        "name": "Rau húng quế & ngò gai",
        "quantity": 181.2,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 2
      },
      {
        "id": "ing-019-03",
        "recipeId": "rec-019",
        "name": "Giá đỗ tươi sạch",
        "quantity": 190.8,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 3
      },
      {
        "id": "ing-019-04",
        "recipeId": "rec-019",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.2,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-019-05",
        "recipeId": "rec-019",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 46.5,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 5
      },
      {
        "id": "ing-019-06",
        "recipeId": "rec-019",
        "name": "Lạc rang đập dập",
        "quantity": 80.6,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 6
      },
      {
        "id": "ing-019-07",
        "recipeId": "rec-019",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-019-08",
        "recipeId": "rec-019",
        "name": "Rau răm tươi",
        "quantity": 59.7,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 8
      },
      {
        "id": "ing-019-09",
        "recipeId": "rec-019",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-019-10",
        "recipeId": "rec-019",
        "name": "Hành hoa & ngò rí",
        "quantity": 140.5,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-019-01",
        "recipeId": "rec-019",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-019-02",
        "recipeId": "rec-019",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-019-03",
        "recipeId": "rec-019",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-019-04",
        "recipeId": "rec-019",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-019-05",
        "recipeId": "rec-019",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-019-06",
        "recipeId": "rec-019",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-019-07",
        "recipeId": "rec-019",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-019-01",
        "recipeId": "rec-019",
        "originalUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "altText": "Cơm Niêu Cháy Giòn Sốt Thịt Kho",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-020",
    "title": "Cơm Gà Hải Nam Nước Luộc Béo Ngậy",
    "slug": "com-ga-hai-nam-nuoc-luoc-beo-ngay-20",
    "description": "Cơm nấu nước luộc gà óng vàng nghệ tây hạt dẻo thơm, thịt gà luộc da căng bóng giòn sần sật.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-004",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-20T10:00:00Z",
    "viewCount": 12712,
    "ratingAverage": 4.77,
    "ratingCount": 21,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 735,
      "protein": 35.1,
      "carbohydrates": 26.3,
      "fat": 9.5,
      "fiber": 5.1,
      "sodium": 933.1
    },
    "ingredients": [
      {
        "id": "ing-020-01",
        "recipeId": "rec-020",
        "name": "Đường phèn kết tinh",
        "quantity": 31.9,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 1
      },
      {
        "id": "ing-020-02",
        "recipeId": "rec-020",
        "name": "Gừng già tươi",
        "quantity": 92.9,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 2
      },
      {
        "id": "ing-020-03",
        "recipeId": "rec-020",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 3
      },
      {
        "id": "ing-020-04",
        "recipeId": "rec-020",
        "name": "Hạt sen Huế tươi",
        "quantity": 138.7,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 4
      },
      {
        "id": "ing-020-05",
        "recipeId": "rec-020",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.0,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 5
      },
      {
        "id": "ing-020-06",
        "recipeId": "rec-020",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 2.7,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 6
      },
      {
        "id": "ing-020-07",
        "recipeId": "rec-020",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 7
      },
      {
        "id": "ing-020-08",
        "recipeId": "rec-020",
        "name": "Mộc nhĩ đen khô",
        "quantity": 44.5,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-020-09",
        "recipeId": "rec-020",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 54.9,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 9
      },
      {
        "id": "ing-020-10",
        "recipeId": "rec-020",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.3,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 10
      },
      {
        "id": "ing-020-11",
        "recipeId": "rec-020",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.1,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 11
      },
      {
        "id": "ing-020-12",
        "recipeId": "rec-020",
        "name": "Ớt hiểm tươi",
        "quantity": 3.6,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-020-01",
        "recipeId": "rec-020",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-020-02",
        "recipeId": "rec-020",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-020-03",
        "recipeId": "rec-020",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-020-04",
        "recipeId": "rec-020",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-020-05",
        "recipeId": "rec-020",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-020-06",
        "recipeId": "rec-020",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-020-01",
        "recipeId": "rec-020",
        "originalUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        "altText": "Cơm Gà Hải Nam Nước Luộc Béo Ngậy",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-021",
    "title": "Gỏi Cuốn Tôm Thịt Tươi Mát",
    "slug": "goi-cuon-tom-thit-tuoi-mat-21",
    "description": "Tôm luộc đỏ au, thịt ba chỉ thái mỏng cùng hẹ và bún cuộn bánh tráng chấm tương đen bơ lạc.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 60,
    "servings": 2,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-005",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-09T10:00:00Z",
    "viewCount": 7804,
    "ratingAverage": 4.71,
    "ratingCount": 286,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 714,
      "protein": 22.1,
      "carbohydrates": 62.5,
      "fat": 18.5,
      "fiber": 4.1,
      "sodium": 914.8
    },
    "ingredients": [
      {
        "id": "ing-021-01",
        "recipeId": "rec-021",
        "name": "Giá đỗ tươi sạch",
        "quantity": 222.4,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 1
      },
      {
        "id": "ing-021-02",
        "recipeId": "rec-021",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.1,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 2
      },
      {
        "id": "ing-021-03",
        "recipeId": "rec-021",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 260.2,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 3
      },
      {
        "id": "ing-021-04",
        "recipeId": "rec-021",
        "name": "Quế thanh khô",
        "quantity": 1.9,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 4
      },
      {
        "id": "ing-021-05",
        "recipeId": "rec-021",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 5
      },
      {
        "id": "ing-021-06",
        "recipeId": "rec-021",
        "name": "Mè trắng rang thơm",
        "quantity": 31.0,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 6
      },
      {
        "id": "ing-021-07",
        "recipeId": "rec-021",
        "name": "Dấm gạo nếp thơm",
        "quantity": 58.3,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 7
      },
      {
        "id": "ing-021-08",
        "recipeId": "rec-021",
        "name": "Thịt nạc vai heo băm",
        "quantity": 331.9,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 8
      },
      {
        "id": "ing-021-09",
        "recipeId": "rec-021",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.2,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 9
      },
      {
        "id": "ing-021-10",
        "recipeId": "rec-021",
        "name": "Thảo quả khô",
        "quantity": 1.8,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-021-11",
        "recipeId": "rec-021",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.8,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-021-01",
        "recipeId": "rec-021",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-021-02",
        "recipeId": "rec-021",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-021-03",
        "recipeId": "rec-021",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-021-04",
        "recipeId": "rec-021",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-021-05",
        "recipeId": "rec-021",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-021-01",
        "recipeId": "rec-021",
        "originalUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "altText": "Gỏi Cuốn Tôm Thịt Tươi Mát",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-022",
    "title": "Nộm Hoa Chuối Tai Heo Giòn Sần Sật",
    "slug": "nom-hoa-chuoi-tai-heo-gion-san-sat-22",
    "description": "Hoa chuối tây thái mỏng ngâm chanh giòn ngọt trộn cùng tai heo luộc giòn sần sật và lạc rang.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-005",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-09T10:00:00Z",
    "viewCount": 9767,
    "ratingAverage": 4.56,
    "ratingCount": 105,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 656,
      "protein": 33.1,
      "carbohydrates": 55.2,
      "fat": 13.8,
      "fiber": 2.5,
      "sodium": 1077.6
    },
    "ingredients": [
      {
        "id": "ing-022-01",
        "recipeId": "rec-022",
        "name": "Dưa leo tươi giòn",
        "quantity": 1.9,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 1
      },
      {
        "id": "ing-022-02",
        "recipeId": "rec-022",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 2
      },
      {
        "id": "ing-022-03",
        "recipeId": "rec-022",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 3
      },
      {
        "id": "ing-022-04",
        "recipeId": "rec-022",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 52.4,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 4
      },
      {
        "id": "ing-022-05",
        "recipeId": "rec-022",
        "name": "Mộc nhĩ đen khô",
        "quantity": 39.3,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-022-06",
        "recipeId": "rec-022",
        "name": "Sả cây tươi thơm",
        "quantity": 7.0,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 6
      },
      {
        "id": "ing-022-07",
        "recipeId": "rec-022",
        "name": "Rau xà lách mỡ",
        "quantity": 339.5,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 7
      },
      {
        "id": "ing-022-08",
        "recipeId": "rec-022",
        "name": "Dầu thực vật cao cấp",
        "quantity": 49.7,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 8
      },
      {
        "id": "ing-022-09",
        "recipeId": "rec-022",
        "name": "Gừng già tươi",
        "quantity": 114.7,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 9
      },
      {
        "id": "ing-022-10",
        "recipeId": "rec-022",
        "name": "Hạt sen Huế tươi",
        "quantity": 168.5,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-022-01",
        "recipeId": "rec-022",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-022-02",
        "recipeId": "rec-022",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-022-03",
        "recipeId": "rec-022",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-022-04",
        "recipeId": "rec-022",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-022-05",
        "recipeId": "rec-022",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-022-01",
        "recipeId": "rec-022",
        "originalUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "altText": "Nộm Hoa Chuối Tai Heo Giòn Sần Sật",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-023",
    "title": "Gỏi Ngó Sen Tôm Thịt Chua Ngọt",
    "slug": "goi-ngo-sen-tom-thit-chua-ngot-23",
    "description": "Ngó sen trắng nõn ngấm vị chua thanh cay nhẹ, tôm bóc nõn ngọt đậm đà chuẩn vị tiệc cưới.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-005",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-15T10:00:00Z",
    "viewCount": 2730,
    "ratingAverage": 4.9,
    "ratingCount": 83,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 369,
      "protein": 29.4,
      "carbohydrates": 39.4,
      "fat": 18.7,
      "fiber": 6.6,
      "sodium": 703.8
    },
    "ingredients": [
      {
        "id": "ing-023-01",
        "recipeId": "rec-023",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.2,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 1
      },
      {
        "id": "ing-023-02",
        "recipeId": "rec-023",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.1,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 2
      },
      {
        "id": "ing-023-03",
        "recipeId": "rec-023",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.3,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 3
      },
      {
        "id": "ing-023-04",
        "recipeId": "rec-023",
        "name": "Thịt nạc vai heo băm",
        "quantity": 279.7,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 4
      },
      {
        "id": "ing-023-05",
        "recipeId": "rec-023",
        "name": "Nấm hương khô thơm",
        "quantity": 59.6,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 5
      },
      {
        "id": "ing-023-06",
        "recipeId": "rec-023",
        "name": "Rau răm tươi",
        "quantity": 46.8,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 6
      },
      {
        "id": "ing-023-07",
        "recipeId": "rec-023",
        "name": "Miến dong làng So",
        "quantity": 112.2,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 7
      },
      {
        "id": "ing-023-08",
        "recipeId": "rec-023",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-023-09",
        "recipeId": "rec-023",
        "name": "Ớt hiểm tươi",
        "quantity": 4.1,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-023-10",
        "recipeId": "rec-023",
        "name": "Lá chanh non",
        "quantity": 10.3,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-023-01",
        "recipeId": "rec-023",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-023-02",
        "recipeId": "rec-023",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-023-03",
        "recipeId": "rec-023",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-023-04",
        "recipeId": "rec-023",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-023-05",
        "recipeId": "rec-023",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-023-06",
        "recipeId": "rec-023",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-023-01",
        "recipeId": "rec-023",
        "originalUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "altText": "Gỏi Ngó Sen Tôm Thịt Chua Ngọt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-024",
    "title": "Gỏi Bò Bóp Thấu Hành Tây Rau Càng Cua",
    "slug": "goi-bo-bop-thau-hanh-tay-rau-cang-cua-24",
    "description": "Thịt bắp bò tái chanh mềm ngọt bóp cùng hành tây chua ngọt và rau càng cua tươi non xanh mướt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-005",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-06T10:00:00Z",
    "viewCount": 15617,
    "ratingAverage": 4.69,
    "ratingCount": 297,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 390,
      "protein": 34.7,
      "carbohydrates": 72.8,
      "fat": 30.7,
      "fiber": 5.7,
      "sodium": 929.8
    },
    "ingredients": [
      {
        "id": "ing-024-01",
        "recipeId": "rec-024",
        "name": "Dầu thực vật cao cấp",
        "quantity": 49.9,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 1
      },
      {
        "id": "ing-024-02",
        "recipeId": "rec-024",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 2
      },
      {
        "id": "ing-024-03",
        "recipeId": "rec-024",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 2.8,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 3
      },
      {
        "id": "ing-024-04",
        "recipeId": "rec-024",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 55.6,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 4
      },
      {
        "id": "ing-024-05",
        "recipeId": "rec-024",
        "name": "Rau húng quế & ngò gai",
        "quantity": 221.1,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 5
      },
      {
        "id": "ing-024-06",
        "recipeId": "rec-024",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 6
      },
      {
        "id": "ing-024-07",
        "recipeId": "rec-024",
        "name": "Mè trắng rang thơm",
        "quantity": 28.8,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 7
      },
      {
        "id": "ing-024-08",
        "recipeId": "rec-024",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.1,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 8
      },
      {
        "id": "ing-024-09",
        "recipeId": "rec-024",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.0,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 9
      },
      {
        "id": "ing-024-10",
        "recipeId": "rec-024",
        "name": "Lạc rang đập dập",
        "quantity": 87.6,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 10
      },
      {
        "id": "ing-024-11",
        "recipeId": "rec-024",
        "name": "Dấm gạo nếp thơm",
        "quantity": 59.9,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 11
      },
      {
        "id": "ing-024-12",
        "recipeId": "rec-024",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 12
      },
      {
        "id": "ing-024-13",
        "recipeId": "rec-024",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.6,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-024-01",
        "recipeId": "rec-024",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-024-02",
        "recipeId": "rec-024",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-024-03",
        "recipeId": "rec-024",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-024-04",
        "recipeId": "rec-024",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-024-05",
        "recipeId": "rec-024",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-024-06",
        "recipeId": "rec-024",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-024-01",
        "recipeId": "rec-024",
        "originalUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "altText": "Gỏi Bò Bóp Thấu Hành Tây Rau Càng Cua",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-025",
    "title": "Nộm Đu Đủ Bò Khô Phố Cổ",
    "slug": "nom-du-du-bo-kho-pho-co-25",
    "description": "Đu Đủ xanh nạo sợi giòn tan, bò khô xé cay nồng hòa cùng nước mắm chua ngọt pha tỏi ớt truyền thống.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-005",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-22T10:00:00Z",
    "viewCount": 14879,
    "ratingAverage": 4.66,
    "ratingCount": 48,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 430,
      "protein": 33.8,
      "carbohydrates": 44.2,
      "fat": 21.8,
      "fiber": 6.0,
      "sodium": 620.0
    },
    "ingredients": [
      {
        "id": "ing-025-01",
        "recipeId": "rec-025",
        "name": "Bột năng tinh chế",
        "quantity": 110.7,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 1
      },
      {
        "id": "ing-025-02",
        "recipeId": "rec-025",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 2
      },
      {
        "id": "ing-025-03",
        "recipeId": "rec-025",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.5,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 3
      },
      {
        "id": "ing-025-04",
        "recipeId": "rec-025",
        "name": "Dầu thực vật cao cấp",
        "quantity": 55.0,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 4
      },
      {
        "id": "ing-025-05",
        "recipeId": "rec-025",
        "name": "Lạc rang đập dập",
        "quantity": 74.4,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 5
      },
      {
        "id": "ing-025-06",
        "recipeId": "rec-025",
        "name": "Hạt sen Huế tươi",
        "quantity": 153.3,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 6
      },
      {
        "id": "ing-025-07",
        "recipeId": "rec-025",
        "name": "Hoa hồi khô",
        "quantity": 4.6,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 7
      },
      {
        "id": "ing-025-08",
        "recipeId": "rec-025",
        "name": "Rau răm tươi",
        "quantity": 47.0,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 8
      },
      {
        "id": "ing-025-09",
        "recipeId": "rec-025",
        "name": "Đậu xanh xát vỏ",
        "quantity": 214.1,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 9
      },
      {
        "id": "ing-025-10",
        "recipeId": "rec-025",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-025-01",
        "recipeId": "rec-025",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-025-02",
        "recipeId": "rec-025",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-025-03",
        "recipeId": "rec-025",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-025-04",
        "recipeId": "rec-025",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-025-05",
        "recipeId": "rec-025",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-025-06",
        "recipeId": "rec-025",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-025-07",
        "recipeId": "rec-025",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-025-01",
        "recipeId": "rec-025",
        "originalUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "altText": "Nộm Đu Đủ Bò Khô Phố Cổ",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-026",
    "title": "Bò Cuốn Lá Lốt Nướng Than Hoa",
    "slug": "bo-cuon-la-lot-nuong-than-hoa-26",
    "description": "Thịt bò băm ướp sả ớt cuộn chặt trong lá lốt bánh tẻ, nướng xèo xèo dậy mùi thơm quyến rũ.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 40,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-006",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-27T10:00:00Z",
    "viewCount": 3066,
    "ratingAverage": 4.68,
    "ratingCount": 270,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 304,
      "protein": 48.7,
      "carbohydrates": 46.9,
      "fat": 25.5,
      "fiber": 2.5,
      "sodium": 647.9
    },
    "ingredients": [
      {
        "id": "ing-026-01",
        "recipeId": "rec-026",
        "name": "Giá đỗ tươi sạch",
        "quantity": 220.1,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 1
      },
      {
        "id": "ing-026-02",
        "recipeId": "rec-026",
        "name": "Lạc rang đập dập",
        "quantity": 93.8,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 2
      },
      {
        "id": "ing-026-03",
        "recipeId": "rec-026",
        "name": "Mộc nhĩ đen khô",
        "quantity": 43.4,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 3
      },
      {
        "id": "ing-026-04",
        "recipeId": "rec-026",
        "name": "Bột năng tinh chế",
        "quantity": 101.7,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 4
      },
      {
        "id": "ing-026-05",
        "recipeId": "rec-026",
        "name": "Gừng già tươi",
        "quantity": 120.0,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 5
      },
      {
        "id": "ing-026-06",
        "recipeId": "rec-026",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 6
      },
      {
        "id": "ing-026-07",
        "recipeId": "rec-026",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 7
      },
      {
        "id": "ing-026-08",
        "recipeId": "rec-026",
        "name": "Quế thanh khô",
        "quantity": 2.4,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 8
      },
      {
        "id": "ing-026-09",
        "recipeId": "rec-026",
        "name": "Rau húng quế & ngò gai",
        "quantity": 197.8,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 9
      },
      {
        "id": "ing-026-10",
        "recipeId": "rec-026",
        "name": "Miến dong làng So",
        "quantity": 99.6,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 10
      },
      {
        "id": "ing-026-11",
        "recipeId": "rec-026",
        "name": "Thịt thăn bò tươi",
        "quantity": 533.4,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 11
      },
      {
        "id": "ing-026-12",
        "recipeId": "rec-026",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 12
      },
      {
        "id": "ing-026-13",
        "recipeId": "rec-026",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.1,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-026-01",
        "recipeId": "rec-026",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-026-02",
        "recipeId": "rec-026",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-026-03",
        "recipeId": "rec-026",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-026-04",
        "recipeId": "rec-026",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-026-05",
        "recipeId": "rec-026",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-026-01",
        "recipeId": "rec-026",
        "originalUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "altText": "Bò Cuốn Lá Lốt Nướng Than Hoa",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-027",
    "title": "Sườn Cừu Nướng Hương Thảo Tỏi Đập",
    "slug": "suon-cuu-nuong-huong-thao-toi-dap-27",
    "description": "Sườn cừu hảo hạng tẩm ướp lá hương thảo và rượu vang đỏ, nướng chín tới hồng mọng nước.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-006",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-07T10:00:00Z",
    "viewCount": 5900,
    "ratingAverage": 4.63,
    "ratingCount": 240,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 339,
      "protein": 35.1,
      "carbohydrates": 43.0,
      "fat": 23.7,
      "fiber": 2.5,
      "sodium": 1123.9
    },
    "ingredients": [
      {
        "id": "ing-027-01",
        "recipeId": "rec-027",
        "name": "Hoa hồi khô",
        "quantity": 4.6,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 1
      },
      {
        "id": "ing-027-02",
        "recipeId": "rec-027",
        "name": "Su hào tươi",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-027-03",
        "recipeId": "rec-027",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 3.9,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 3
      },
      {
        "id": "ing-027-04",
        "recipeId": "rec-027",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 4
      },
      {
        "id": "ing-027-05",
        "recipeId": "rec-027",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 5
      },
      {
        "id": "ing-027-06",
        "recipeId": "rec-027",
        "name": "Lá chanh non",
        "quantity": 10.9,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 6
      },
      {
        "id": "ing-027-07",
        "recipeId": "rec-027",
        "name": "Rau húng quế & ngò gai",
        "quantity": 190.7,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 7
      },
      {
        "id": "ing-027-08",
        "recipeId": "rec-027",
        "name": "Rau xà lách mỡ",
        "quantity": 344.1,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 8
      },
      {
        "id": "ing-027-09",
        "recipeId": "rec-027",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.4,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 9
      },
      {
        "id": "ing-027-10",
        "recipeId": "rec-027",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.4,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 10
      },
      {
        "id": "ing-027-11",
        "recipeId": "rec-027",
        "name": "Miến dong làng So",
        "quantity": 106.5,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 11
      },
      {
        "id": "ing-027-12",
        "recipeId": "rec-027",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 250.0,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-027-01",
        "recipeId": "rec-027",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-027-02",
        "recipeId": "rec-027",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-027-03",
        "recipeId": "rec-027",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-027-04",
        "recipeId": "rec-027",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-027-05",
        "recipeId": "rec-027",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-027-06",
        "recipeId": "rec-027",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-027-01",
        "recipeId": "rec-027",
        "originalUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "altText": "Sườn Cừu Nướng Hương Thảo Tỏi Đập",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-028",
    "title": "Thịt Ba Chỉ Nướng Mắc Khén Tây Bắc",
    "slug": "thit-ba-chi-nuong-mac-khen-tay-bac-28",
    "description": "Hương thơm hoang dã của hạt mắc khén và hạt dổi rừng thấm đẫm vào từng thớ thịt nướng cháy cạnh.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 60,
    "servings": 6,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-006",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-21T10:00:00Z",
    "viewCount": 7339,
    "ratingAverage": 4.88,
    "ratingCount": 254,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 501,
      "protein": 51.9,
      "carbohydrates": 69.0,
      "fat": 34.8,
      "fiber": 5.4,
      "sodium": 938.0
    },
    "ingredients": [
      {
        "id": "ing-028-01",
        "recipeId": "rec-028",
        "name": "Nấm hương khô thơm",
        "quantity": 51.6,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 1
      },
      {
        "id": "ing-028-02",
        "recipeId": "rec-028",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.1,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 2
      },
      {
        "id": "ing-028-03",
        "recipeId": "rec-028",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 274.6,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 3
      },
      {
        "id": "ing-028-04",
        "recipeId": "rec-028",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-028-05",
        "recipeId": "rec-028",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 0.9,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 5
      },
      {
        "id": "ing-028-06",
        "recipeId": "rec-028",
        "name": "Gừng già tươi",
        "quantity": 102.6,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 6
      },
      {
        "id": "ing-028-07",
        "recipeId": "rec-028",
        "name": "Đậu xanh xát vỏ",
        "quantity": 195.4,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 7
      },
      {
        "id": "ing-028-08",
        "recipeId": "rec-028",
        "name": "Rau xà lách mỡ",
        "quantity": 354.7,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 8
      },
      {
        "id": "ing-028-09",
        "recipeId": "rec-028",
        "name": "Hành hoa & ngò rí",
        "quantity": 179.7,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 9
      },
      {
        "id": "ing-028-10",
        "recipeId": "rec-028",
        "name": "Hạt sen Huế tươi",
        "quantity": 178.6,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 10
      },
      {
        "id": "ing-028-11",
        "recipeId": "rec-028",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 2.8,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 11
      },
      {
        "id": "ing-028-12",
        "recipeId": "rec-028",
        "name": "Miến dong làng So",
        "quantity": 91.3,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-028-01",
        "recipeId": "rec-028",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-028-02",
        "recipeId": "rec-028",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-028-03",
        "recipeId": "rec-028",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-028-04",
        "recipeId": "rec-028",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-028-05",
        "recipeId": "rec-028",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-028-06",
        "recipeId": "rec-028",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-028-07",
        "recipeId": "rec-028",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-028-01",
        "recipeId": "rec-028",
        "originalUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "altText": "Thịt Ba Chỉ Nướng Mắc Khén Tây Bắc",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-029",
    "title": "Gà Nướng Mật Ong Rừng Tây Nguyên",
    "slug": "ga-nuong-mat-ong-rung-tay-nguyen-29",
    "description": "Gà đồi nguyên con phết sốt mật ong rừng nướng than hồng da vàng giòn màu cánh gián hấp dẫn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 30,
    "servings": 2,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-006",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-23T10:00:00Z",
    "viewCount": 2362,
    "ratingAverage": 4.63,
    "ratingCount": 155,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 691,
      "protein": 48.9,
      "carbohydrates": 53.3,
      "fat": 32.4,
      "fiber": 3.6,
      "sodium": 813.5
    },
    "ingredients": [
      {
        "id": "ing-029-01",
        "recipeId": "rec-029",
        "name": "Gừng già tươi",
        "quantity": 102.8,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 1
      },
      {
        "id": "ing-029-02",
        "recipeId": "rec-029",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.9,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 2
      },
      {
        "id": "ing-029-03",
        "recipeId": "rec-029",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 285.6,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 3
      },
      {
        "id": "ing-029-04",
        "recipeId": "rec-029",
        "name": "Nấm hương khô thơm",
        "quantity": 55.3,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 4
      },
      {
        "id": "ing-029-05",
        "recipeId": "rec-029",
        "name": "Thịt tôm sú tươi",
        "quantity": 405.3,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 5
      },
      {
        "id": "ing-029-06",
        "recipeId": "rec-029",
        "name": "Hoa hồi khô",
        "quantity": 5.8,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 6
      },
      {
        "id": "ing-029-07",
        "recipeId": "rec-029",
        "name": "Dưa leo tươi giòn",
        "quantity": 1.9,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 7
      },
      {
        "id": "ing-029-08",
        "recipeId": "rec-029",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 8
      },
      {
        "id": "ing-029-09",
        "recipeId": "rec-029",
        "name": "Thảo quả khô",
        "quantity": 2.4,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-029-10",
        "recipeId": "rec-029",
        "name": "Giá đỗ tươi sạch",
        "quantity": 233.9,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-029-01",
        "recipeId": "rec-029",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-029-02",
        "recipeId": "rec-029",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-029-03",
        "recipeId": "rec-029",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-029-04",
        "recipeId": "rec-029",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-029-05",
        "recipeId": "rec-029",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-029-01",
        "recipeId": "rec-029",
        "originalUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "altText": "Gà Nướng Mật Ong Rừng Tây Nguyên",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-030",
    "title": "Tôm Sú Nướng Muối Ớt Xanh Xiên Que",
    "slug": "tom-su-nuong-muoi-ot-xanh-xien-que-30",
    "description": "Tôm sú tươi nhảy tanh tách tẩm muối hạt giã ớt xiêm xanh cay nồng nướng trên lửa than.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 90,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-006",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-19T10:00:00Z",
    "viewCount": 3487,
    "ratingAverage": 4.72,
    "ratingCount": 326,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 662,
      "protein": 25.3,
      "carbohydrates": 41.2,
      "fat": 10.0,
      "fiber": 5.1,
      "sodium": 1041.1
    },
    "ingredients": [
      {
        "id": "ing-030-01",
        "recipeId": "rec-030",
        "name": "Rau răm tươi",
        "quantity": 50.0,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 1
      },
      {
        "id": "ing-030-02",
        "recipeId": "rec-030",
        "name": "Lá chanh non",
        "quantity": 10.0,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 2
      },
      {
        "id": "ing-030-03",
        "recipeId": "rec-030",
        "name": "Đậu xanh xát vỏ",
        "quantity": 213.9,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 3
      },
      {
        "id": "ing-030-04",
        "recipeId": "rec-030",
        "name": "Lạc rang đập dập",
        "quantity": 80.2,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 4
      },
      {
        "id": "ing-030-05",
        "recipeId": "rec-030",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.4,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 5
      },
      {
        "id": "ing-030-06",
        "recipeId": "rec-030",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 227.5,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 6
      },
      {
        "id": "ing-030-07",
        "recipeId": "rec-030",
        "name": "Hành hoa & ngò rí",
        "quantity": 141.8,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 7
      },
      {
        "id": "ing-030-08",
        "recipeId": "rec-030",
        "name": "Nấm hương khô thơm",
        "quantity": 55.6,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 8
      },
      {
        "id": "ing-030-09",
        "recipeId": "rec-030",
        "name": "Giá đỗ tươi sạch",
        "quantity": 183.2,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 9
      },
      {
        "id": "ing-030-10",
        "recipeId": "rec-030",
        "name": "Đường phèn kết tinh",
        "quantity": 29.4,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 10
      },
      {
        "id": "ing-030-11",
        "recipeId": "rec-030",
        "name": "Miến dong làng So",
        "quantity": 97.1,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-030-01",
        "recipeId": "rec-030",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-030-02",
        "recipeId": "rec-030",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-030-03",
        "recipeId": "rec-030",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-030-04",
        "recipeId": "rec-030",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-030-05",
        "recipeId": "rec-030",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-030-01",
        "recipeId": "rec-030",
        "originalUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        "altText": "Tôm Sú Nướng Muối Ớt Xanh Xiên Que",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-031",
    "title": "Cua Huỳnh Đế Hấp Nước Dừa Xiêm",
    "slug": "cua-huynh-de-hap-nuoc-dua-xiem-31",
    "description": "Thịt cua chắc nịch ngọt ngào tự nhiên hấp cùng nước dừa xiêm béo nhẹ và gừng tươi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 30,
    "servings": 6,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-007",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-21T10:00:00Z",
    "viewCount": 14066,
    "ratingAverage": 4.95,
    "ratingCount": 410,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 665,
      "protein": 24.3,
      "carbohydrates": 42.6,
      "fat": 12.6,
      "fiber": 4.3,
      "sodium": 790.4
    },
    "ingredients": [
      {
        "id": "ing-031-01",
        "recipeId": "rec-031",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.6,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 1
      },
      {
        "id": "ing-031-02",
        "recipeId": "rec-031",
        "name": "Gừng già tươi",
        "quantity": 112.8,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 2
      },
      {
        "id": "ing-031-03",
        "recipeId": "rec-031",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 55.8,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 3
      },
      {
        "id": "ing-031-04",
        "recipeId": "rec-031",
        "name": "Thảo quả khô",
        "quantity": 2.4,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-031-05",
        "recipeId": "rec-031",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 5
      },
      {
        "id": "ing-031-06",
        "recipeId": "rec-031",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.4,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 6
      },
      {
        "id": "ing-031-07",
        "recipeId": "rec-031",
        "name": "Miến dong làng So",
        "quantity": 107.8,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 7
      },
      {
        "id": "ing-031-08",
        "recipeId": "rec-031",
        "name": "Rau húng quế & ngò gai",
        "quantity": 210.7,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 8
      },
      {
        "id": "ing-031-09",
        "recipeId": "rec-031",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 0.9,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 9
      },
      {
        "id": "ing-031-10",
        "recipeId": "rec-031",
        "name": "Trứng gà ta tươi",
        "quantity": 3.3,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-031-01",
        "recipeId": "rec-031",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-031-02",
        "recipeId": "rec-031",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-031-03",
        "recipeId": "rec-031",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-031-04",
        "recipeId": "rec-031",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-031-05",
        "recipeId": "rec-031",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-031-06",
        "recipeId": "rec-031",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-031-01",
        "recipeId": "rec-031",
        "originalUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "altText": "Cua Huỳnh Đế Hấp Nước Dừa Xiêm",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-032",
    "title": "Mực Trứng Hấp Gừng Hành Hoa",
    "slug": "muc-trung-hap-gung-hanh-hoa-32",
    "description": "Mực trứng tươi rói bụng đầy ắp trứng béo bùi, hấp cách thủy cùng gừng cạo vỏ và hành hoa.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-007",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-14T10:00:00Z",
    "viewCount": 9481,
    "ratingAverage": 4.52,
    "ratingCount": 65,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 728,
      "protein": 25.7,
      "carbohydrates": 77.9,
      "fat": 10.7,
      "fiber": 6.6,
      "sodium": 636.6
    },
    "ingredients": [
      {
        "id": "ing-032-01",
        "recipeId": "rec-032",
        "name": "Mè trắng rang thơm",
        "quantity": 33.2,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 1
      },
      {
        "id": "ing-032-02",
        "recipeId": "rec-032",
        "name": "Lá chanh non",
        "quantity": 11.5,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 2
      },
      {
        "id": "ing-032-03",
        "recipeId": "rec-032",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.7,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 3
      },
      {
        "id": "ing-032-04",
        "recipeId": "rec-032",
        "name": "Đường phèn kết tinh",
        "quantity": 35.8,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 4
      },
      {
        "id": "ing-032-05",
        "recipeId": "rec-032",
        "name": "Hành tây củ lớn",
        "quantity": 2.4,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-032-06",
        "recipeId": "rec-032",
        "name": "Mộc nhĩ đen khô",
        "quantity": 41.8,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 6
      },
      {
        "id": "ing-032-07",
        "recipeId": "rec-032",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 52.6,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 7
      },
      {
        "id": "ing-032-08",
        "recipeId": "rec-032",
        "name": "Rau răm tươi",
        "quantity": 46.5,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 8
      },
      {
        "id": "ing-032-09",
        "recipeId": "rec-032",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.4,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 9
      },
      {
        "id": "ing-032-10",
        "recipeId": "rec-032",
        "name": "Nấm hương khô thơm",
        "quantity": 52.0,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 10
      },
      {
        "id": "ing-032-11",
        "recipeId": "rec-032",
        "name": "Hành hoa & ngò rí",
        "quantity": 148.6,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 11
      },
      {
        "id": "ing-032-12",
        "recipeId": "rec-032",
        "name": "Quế thanh khô",
        "quantity": 2.2,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-032-01",
        "recipeId": "rec-032",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-032-02",
        "recipeId": "rec-032",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-032-03",
        "recipeId": "rec-032",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-032-04",
        "recipeId": "rec-032",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-032-05",
        "recipeId": "rec-032",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-032-06",
        "recipeId": "rec-032",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-032-01",
        "recipeId": "rec-032",
        "originalUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "altText": "Mực Trứng Hấp Gừng Hành Hoa",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-033",
    "title": "Tôm Sốt Bơ Tỏi Thảo Mộc",
    "slug": "tom-sot-bo-toi-thao-moc-33",
    "description": "Tôm càng xanh áo lớp sốt bơ Pháp béo ngậy thơm lừng tỏi phi và lá mùi tây xắt nhuyễn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 20,
    "servings": 4,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-007",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-27T10:00:00Z",
    "viewCount": 3102,
    "ratingAverage": 4.91,
    "ratingCount": 113,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 489,
      "protein": 22.9,
      "carbohydrates": 39.6,
      "fat": 18.8,
      "fiber": 6.8,
      "sodium": 896.9
    },
    "ingredients": [
      {
        "id": "ing-033-01",
        "recipeId": "rec-033",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 1
      },
      {
        "id": "ing-033-02",
        "recipeId": "rec-033",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 2
      },
      {
        "id": "ing-033-03",
        "recipeId": "rec-033",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 1.9,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 3
      },
      {
        "id": "ing-033-04",
        "recipeId": "rec-033",
        "name": "Lạc rang đập dập",
        "quantity": 83.5,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 4
      },
      {
        "id": "ing-033-05",
        "recipeId": "rec-033",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 5
      },
      {
        "id": "ing-033-06",
        "recipeId": "rec-033",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.1,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 6
      },
      {
        "id": "ing-033-07",
        "recipeId": "rec-033",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.5,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 7
      },
      {
        "id": "ing-033-08",
        "recipeId": "rec-033",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.0,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 8
      },
      {
        "id": "ing-033-09",
        "recipeId": "rec-033",
        "name": "Gừng già tươi",
        "quantity": 119.9,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 9
      },
      {
        "id": "ing-033-10",
        "recipeId": "rec-033",
        "name": "Rau húng quế & ngò gai",
        "quantity": 182.6,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 10
      },
      {
        "id": "ing-033-11",
        "recipeId": "rec-033",
        "name": "Hoa hồi khô",
        "quantity": 4.9,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 11
      },
      {
        "id": "ing-033-12",
        "recipeId": "rec-033",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-033-01",
        "recipeId": "rec-033",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-033-02",
        "recipeId": "rec-033",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-033-03",
        "recipeId": "rec-033",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-033-04",
        "recipeId": "rec-033",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-033-05",
        "recipeId": "rec-033",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-033-06",
        "recipeId": "rec-033",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-033-01",
        "recipeId": "rec-033",
        "originalUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "altText": "Tôm Sốt Bơ Tỏi Thảo Mộc",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-034",
    "title": "Sò Điệp Nướng Mỡ Hành Đậu Phộng",
    "slug": "so-diep-nuong-mo-hanh-dau-phong-34",
    "description": "Cồi sò điệp trắng muốt nướng bốc khói trên than, rưới mỡ hành xanh mướt và lạc rang giã dập.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 30,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-007",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-11T10:00:00Z",
    "viewCount": 12013,
    "ratingAverage": 4.82,
    "ratingCount": 317,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 384,
      "protein": 23.6,
      "carbohydrates": 62.1,
      "fat": 24.4,
      "fiber": 6.5,
      "sodium": 494.7
    },
    "ingredients": [
      {
        "id": "ing-034-01",
        "recipeId": "rec-034",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.3,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 1
      },
      {
        "id": "ing-034-02",
        "recipeId": "rec-034",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 2
      },
      {
        "id": "ing-034-03",
        "recipeId": "rec-034",
        "name": "Ớt hiểm tươi",
        "quantity": 3.7,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 3
      },
      {
        "id": "ing-034-04",
        "recipeId": "rec-034",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 4
      },
      {
        "id": "ing-034-05",
        "recipeId": "rec-034",
        "name": "Dấm gạo nếp thơm",
        "quantity": 54.3,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 5
      },
      {
        "id": "ing-034-06",
        "recipeId": "rec-034",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 52.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 6
      },
      {
        "id": "ing-034-07",
        "recipeId": "rec-034",
        "name": "Hành hoa & ngò rí",
        "quantity": 179.1,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 7
      },
      {
        "id": "ing-034-08",
        "recipeId": "rec-034",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 8
      },
      {
        "id": "ing-034-09",
        "recipeId": "rec-034",
        "name": "Thịt thăn bò tươi",
        "quantity": 506.7,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 9
      },
      {
        "id": "ing-034-10",
        "recipeId": "rec-034",
        "name": "Bột năng tinh chế",
        "quantity": 104.1,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 10
      },
      {
        "id": "ing-034-11",
        "recipeId": "rec-034",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-034-01",
        "recipeId": "rec-034",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-034-02",
        "recipeId": "rec-034",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-034-03",
        "recipeId": "rec-034",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-034-04",
        "recipeId": "rec-034",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-034-05",
        "recipeId": "rec-034",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-034-06",
        "recipeId": "rec-034",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-034-01",
        "recipeId": "rec-034",
        "originalUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "altText": "Sò Điệp Nướng Mỡ Hành Đậu Phộng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-035",
    "title": "Cá Hồi Áp Chảo Sốt Cam Tươi",
    "slug": "ca-hoi-ap-chao-sot-cam-tuoi-35",
    "description": "Miếng fillet cá hồi Na Uy giòn da mềm mọng bên trong rưới sốt cam mật ong chua dịu thanh tao.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 20,
    "servings": 8,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-007",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-20T10:00:00Z",
    "viewCount": 1424,
    "ratingAverage": 4.94,
    "ratingCount": 338,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 360,
      "protein": 41.8,
      "carbohydrates": 40.5,
      "fat": 31.0,
      "fiber": 3.4,
      "sodium": 1030.3
    },
    "ingredients": [
      {
        "id": "ing-035-01",
        "recipeId": "rec-035",
        "name": "Thịt thăn bò tươi",
        "quantity": 453.0,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 1
      },
      {
        "id": "ing-035-02",
        "recipeId": "rec-035",
        "name": "Hành hoa & ngò rí",
        "quantity": 168.3,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 2
      },
      {
        "id": "ing-035-03",
        "recipeId": "rec-035",
        "name": "Lá chanh non",
        "quantity": 11.9,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 3
      },
      {
        "id": "ing-035-04",
        "recipeId": "rec-035",
        "name": "Hạt sen Huế tươi",
        "quantity": 140.1,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 4
      },
      {
        "id": "ing-035-05",
        "recipeId": "rec-035",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.1,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 5
      },
      {
        "id": "ing-035-06",
        "recipeId": "rec-035",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 6
      },
      {
        "id": "ing-035-07",
        "recipeId": "rec-035",
        "name": "Thịt tôm sú tươi",
        "quantity": 375.1,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 7
      },
      {
        "id": "ing-035-08",
        "recipeId": "rec-035",
        "name": "Ớt hiểm tươi",
        "quantity": 4.4,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 8
      },
      {
        "id": "ing-035-09",
        "recipeId": "rec-035",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-035-10",
        "recipeId": "rec-035",
        "name": "Quế thanh khô",
        "quantity": 2.3,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-035-01",
        "recipeId": "rec-035",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-035-02",
        "recipeId": "rec-035",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-035-03",
        "recipeId": "rec-035",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-035-04",
        "recipeId": "rec-035",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-035-05",
        "recipeId": "rec-035",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-035-06",
        "recipeId": "rec-035",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-035-07",
        "recipeId": "rec-035",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-035-01",
        "recipeId": "rec-035",
        "originalUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
        "altText": "Cá Hồi Áp Chảo Sốt Cam Tươi",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-036",
    "title": "Đậu Hũ Non Sốt Nấm Đông Cô Chay",
    "slug": "dau-hu-non-sot-nam-dong-co-chay-36",
    "description": "Miếng đậu hũ lụa mềm mượt như tan trong miệng ngập trong sốt nấm hương cô đặc đậm đà thanh tịnh.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 90,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-008",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-26T10:00:00Z",
    "viewCount": 7370,
    "ratingAverage": 4.41,
    "ratingCount": 216,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 578,
      "protein": 49.4,
      "carbohydrates": 38.1,
      "fat": 18.5,
      "fiber": 3.2,
      "sodium": 589.7
    },
    "ingredients": [
      {
        "id": "ing-036-01",
        "recipeId": "rec-036",
        "name": "Hoa hồi khô",
        "quantity": 5.9,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 1
      },
      {
        "id": "ing-036-02",
        "recipeId": "rec-036",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 2
      },
      {
        "id": "ing-036-03",
        "recipeId": "rec-036",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 3
      },
      {
        "id": "ing-036-04",
        "recipeId": "rec-036",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 51.0,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 4
      },
      {
        "id": "ing-036-05",
        "recipeId": "rec-036",
        "name": "Mộc nhĩ đen khô",
        "quantity": 39.1,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-036-06",
        "recipeId": "rec-036",
        "name": "Rau húng quế & ngò gai",
        "quantity": 194.4,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 6
      },
      {
        "id": "ing-036-07",
        "recipeId": "rec-036",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 7
      },
      {
        "id": "ing-036-08",
        "recipeId": "rec-036",
        "name": "Dầu thực vật cao cấp",
        "quantity": 58.7,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 8
      },
      {
        "id": "ing-036-09",
        "recipeId": "rec-036",
        "name": "Dấm gạo nếp thơm",
        "quantity": 46.2,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 9
      },
      {
        "id": "ing-036-10",
        "recipeId": "rec-036",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.1,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 10
      },
      {
        "id": "ing-036-11",
        "recipeId": "rec-036",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 268.2,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 11
      },
      {
        "id": "ing-036-12",
        "recipeId": "rec-036",
        "name": "Ớt hiểm tươi",
        "quantity": 4.3,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 12
      },
      {
        "id": "ing-036-13",
        "recipeId": "rec-036",
        "name": "Thịt tôm sú tươi",
        "quantity": 380.7,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-036-01",
        "recipeId": "rec-036",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-036-02",
        "recipeId": "rec-036",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-036-03",
        "recipeId": "rec-036",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-036-04",
        "recipeId": "rec-036",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-036-05",
        "recipeId": "rec-036",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-036-06",
        "recipeId": "rec-036",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-036-01",
        "recipeId": "rec-036",
        "originalUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "altText": "Đậu Hũ Non Sốt Nấm Đông Cô Chay",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-037",
    "title": "Canh Nấm Hạt Sen Táo Đỏ Thực Dưỡng",
    "slug": "canh-nam-hat-sen-tao-do-thuc-duong-37",
    "description": "Nước canh thanh ngọt tự nhiên từ nấm bào ngư, hạt sen Huế bùi bùi và táo đỏ bổ dưỡng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 45,
    "servings": 6,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-008",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-22T10:00:00Z",
    "viewCount": 5594,
    "ratingAverage": 4.96,
    "ratingCount": 209,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 641,
      "protein": 47.5,
      "carbohydrates": 31.9,
      "fat": 17.4,
      "fiber": 4.4,
      "sodium": 812.0
    },
    "ingredients": [
      {
        "id": "ing-037-01",
        "recipeId": "rec-037",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 261.6,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 1
      },
      {
        "id": "ing-037-02",
        "recipeId": "rec-037",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 0.9,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 2
      },
      {
        "id": "ing-037-03",
        "recipeId": "rec-037",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.0,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 3
      },
      {
        "id": "ing-037-04",
        "recipeId": "rec-037",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.3,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 4
      },
      {
        "id": "ing-037-05",
        "recipeId": "rec-037",
        "name": "Rau xà lách mỡ",
        "quantity": 356.2,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 5
      },
      {
        "id": "ing-037-06",
        "recipeId": "rec-037",
        "name": "Thảo quả khô",
        "quantity": 2.4,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 6
      },
      {
        "id": "ing-037-07",
        "recipeId": "rec-037",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.1,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 7
      },
      {
        "id": "ing-037-08",
        "recipeId": "rec-037",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 8
      },
      {
        "id": "ing-037-09",
        "recipeId": "rec-037",
        "name": "Lạc rang đập dập",
        "quantity": 84.9,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 9
      },
      {
        "id": "ing-037-10",
        "recipeId": "rec-037",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-037-01",
        "recipeId": "rec-037",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-037-02",
        "recipeId": "rec-037",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-037-03",
        "recipeId": "rec-037",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-037-04",
        "recipeId": "rec-037",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-037-05",
        "recipeId": "rec-037",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-037-01",
        "recipeId": "rec-037",
        "originalUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "altText": "Canh Nấm Hạt Sen Táo Đỏ Thực Dưỡng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-038",
    "title": "Cơm Chiên Hạt Sen Lá Sen Chay",
    "slug": "com-chien-hat-sen-la-sen-chay-38",
    "description": "Cơm chiên ngũ sắc gói trong lá sen tươi hấp cách thủy đượm hương thơm tinh khiết của sen hạ.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-008",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-07T10:00:00Z",
    "viewCount": 16556,
    "ratingAverage": 4.46,
    "ratingCount": 207,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 308,
      "protein": 48.6,
      "carbohydrates": 74.6,
      "fat": 22.4,
      "fiber": 3.4,
      "sodium": 845.6
    },
    "ingredients": [
      {
        "id": "ing-038-01",
        "recipeId": "rec-038",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 55.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 1
      },
      {
        "id": "ing-038-02",
        "recipeId": "rec-038",
        "name": "Dầu thực vật cao cấp",
        "quantity": 58.9,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 2
      },
      {
        "id": "ing-038-03",
        "recipeId": "rec-038",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 2.8,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 3
      },
      {
        "id": "ing-038-04",
        "recipeId": "rec-038",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.8,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 4
      },
      {
        "id": "ing-038-05",
        "recipeId": "rec-038",
        "name": "Sả cây tươi thơm",
        "quantity": 5.6,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 5
      },
      {
        "id": "ing-038-06",
        "recipeId": "rec-038",
        "name": "Muối hạt tinh khiết",
        "quantity": 1.9,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 6
      },
      {
        "id": "ing-038-07",
        "recipeId": "rec-038",
        "name": "Nấm hương khô thơm",
        "quantity": 53.8,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 7
      },
      {
        "id": "ing-038-08",
        "recipeId": "rec-038",
        "name": "Hạt sen Huế tươi",
        "quantity": 141.3,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 8
      },
      {
        "id": "ing-038-09",
        "recipeId": "rec-038",
        "name": "Rau húng quế & ngò gai",
        "quantity": 207.5,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 9
      },
      {
        "id": "ing-038-10",
        "recipeId": "rec-038",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 257.3,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 10
      },
      {
        "id": "ing-038-11",
        "recipeId": "rec-038",
        "name": "Ớt hiểm tươi",
        "quantity": 3.7,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-038-01",
        "recipeId": "rec-038",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-038-02",
        "recipeId": "rec-038",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-038-03",
        "recipeId": "rec-038",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-038-04",
        "recipeId": "rec-038",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-038-05",
        "recipeId": "rec-038",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-038-01",
        "recipeId": "rec-038",
        "originalUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "altText": "Cơm Chiên Hạt Sen Lá Sen Chay",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-039",
    "title": "Chả Giò Chay Khoai Môn Nấm Mèo",
    "slug": "cha-gio-chay-khoai-mon-nam-meo-39",
    "description": "Khoai môn sáp bùi béo kết hợp nấm đùi gà và mộc nhĩ giòn ngọt trong vỏ bánh rế giòn rụm.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-008",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 4570,
    "ratingAverage": 4.84,
    "ratingCount": 367,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 583,
      "protein": 32.6,
      "carbohydrates": 38.7,
      "fat": 17.4,
      "fiber": 8.0,
      "sodium": 514.0
    },
    "ingredients": [
      {
        "id": "ing-039-01",
        "recipeId": "rec-039",
        "name": "Bột năng tinh chế",
        "quantity": 109.6,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 1
      },
      {
        "id": "ing-039-02",
        "recipeId": "rec-039",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 56.7,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 2
      },
      {
        "id": "ing-039-03",
        "recipeId": "rec-039",
        "name": "Đậu xanh xát vỏ",
        "quantity": 217.0,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 3
      },
      {
        "id": "ing-039-04",
        "recipeId": "rec-039",
        "name": "Thịt tôm sú tươi",
        "quantity": 383.2,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 4
      },
      {
        "id": "ing-039-05",
        "recipeId": "rec-039",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.2,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 5
      },
      {
        "id": "ing-039-06",
        "recipeId": "rec-039",
        "name": "Sả cây tươi thơm",
        "quantity": 6.3,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 6
      },
      {
        "id": "ing-039-07",
        "recipeId": "rec-039",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.3,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 7
      },
      {
        "id": "ing-039-08",
        "recipeId": "rec-039",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 8
      },
      {
        "id": "ing-039-09",
        "recipeId": "rec-039",
        "name": "Rau húng quế & ngò gai",
        "quantity": 229.1,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 9
      },
      {
        "id": "ing-039-10",
        "recipeId": "rec-039",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.8,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 10
      },
      {
        "id": "ing-039-11",
        "recipeId": "rec-039",
        "name": "Nấm hương khô thơm",
        "quantity": 50.0,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-039-01",
        "recipeId": "rec-039",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-039-02",
        "recipeId": "rec-039",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-039-03",
        "recipeId": "rec-039",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-039-04",
        "recipeId": "rec-039",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-039-05",
        "recipeId": "rec-039",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-039-01",
        "recipeId": "rec-039",
        "originalUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "altText": "Chả Giò Chay Khoai Môn Nấm Mèo",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-040",
    "title": "Gỏi Mít Non Trộn Rau Răm Đậu Phộng Chay",
    "slug": "goi-mit-non-tron-rau-ram-dau-phong-chay-40",
    "description": "Mít non luộc chín xé sợi dai bùi trộn sốt chua ngọt, rau răm thơm the và mè rang vàng óng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-008",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-12T10:00:00Z",
    "viewCount": 15043,
    "ratingAverage": 4.8,
    "ratingCount": 221,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 344,
      "protein": 39.0,
      "carbohydrates": 84.9,
      "fat": 10.2,
      "fiber": 7.1,
      "sodium": 818.3
    },
    "ingredients": [
      {
        "id": "ing-040-01",
        "recipeId": "rec-040",
        "name": "Quế thanh khô",
        "quantity": 1.9,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 1
      },
      {
        "id": "ing-040-02",
        "recipeId": "rec-040",
        "name": "Đậu xanh xát vỏ",
        "quantity": 231.0,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 2
      },
      {
        "id": "ing-040-03",
        "recipeId": "rec-040",
        "name": "Hành hoa & ngò rí",
        "quantity": 171.2,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 3
      },
      {
        "id": "ing-040-04",
        "recipeId": "rec-040",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.2,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 4
      },
      {
        "id": "ing-040-05",
        "recipeId": "rec-040",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.2,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 5
      },
      {
        "id": "ing-040-06",
        "recipeId": "rec-040",
        "name": "Sả cây tươi thơm",
        "quantity": 5.6,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 6
      },
      {
        "id": "ing-040-07",
        "recipeId": "rec-040",
        "name": "Ớt hiểm tươi",
        "quantity": 4.5,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-040-08",
        "recipeId": "rec-040",
        "name": "Mộc nhĩ đen khô",
        "quantity": 36.6,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-040-09",
        "recipeId": "rec-040",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.1,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 9
      },
      {
        "id": "ing-040-10",
        "recipeId": "rec-040",
        "name": "Rau húng quế & ngò gai",
        "quantity": 198.5,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-040-01",
        "recipeId": "rec-040",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-040-02",
        "recipeId": "rec-040",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-040-03",
        "recipeId": "rec-040",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-040-04",
        "recipeId": "rec-040",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-040-05",
        "recipeId": "rec-040",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-040-06",
        "recipeId": "rec-040",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-040-01",
        "recipeId": "rec-040",
        "originalUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "altText": "Gỏi Mít Non Trộn Rau Răm Đậu Phộng Chay",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-041",
    "title": "Mì Quảng Tôm Thịt Trứng Cút Xứ Quảng",
    "slug": "mi-quang-tom-thit-trung-cut-xu-quang-41",
    "description": "Sợi mì vàng óng nghệ tươi, nước nhưn tôm thịt đậm đà sóng sánh ăn kèm bánh tráng mè nướng giòn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 20,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-009",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-26T10:00:00Z",
    "viewCount": 12449,
    "ratingAverage": 4.86,
    "ratingCount": 329,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 729,
      "protein": 39.1,
      "carbohydrates": 34.2,
      "fat": 10.5,
      "fiber": 3.6,
      "sodium": 910.6
    },
    "ingredients": [
      {
        "id": "ing-041-01",
        "recipeId": "rec-041",
        "name": "Ớt hiểm tươi",
        "quantity": 4.0,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-041-02",
        "recipeId": "rec-041",
        "name": "Thảo quả khô",
        "quantity": 2.2,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-041-03",
        "recipeId": "rec-041",
        "name": "Mè trắng rang thơm",
        "quantity": 33.9,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 3
      },
      {
        "id": "ing-041-04",
        "recipeId": "rec-041",
        "name": "Lá chanh non",
        "quantity": 10.8,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 4
      },
      {
        "id": "ing-041-05",
        "recipeId": "rec-041",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 56.8,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 5
      },
      {
        "id": "ing-041-06",
        "recipeId": "rec-041",
        "name": "Dầu thực vật cao cấp",
        "quantity": 46.4,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 6
      },
      {
        "id": "ing-041-07",
        "recipeId": "rec-041",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 285.7,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 7
      },
      {
        "id": "ing-041-08",
        "recipeId": "rec-041",
        "name": "Đường phèn kết tinh",
        "quantity": 27.3,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 8
      },
      {
        "id": "ing-041-09",
        "recipeId": "rec-041",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-041-10",
        "recipeId": "rec-041",
        "name": "Bột năng tinh chế",
        "quantity": 103.0,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-041-01",
        "recipeId": "rec-041",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-041-02",
        "recipeId": "rec-041",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-041-03",
        "recipeId": "rec-041",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-041-04",
        "recipeId": "rec-041",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-041-05",
        "recipeId": "rec-041",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-041-01",
        "recipeId": "rec-041",
        "originalUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "altText": "Mì Quảng Tôm Thịt Trứng Cút Xứ Quảng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-042",
    "title": "Hủ Tiếu Nam Vang Khô Sốt Tôm Thịt",
    "slug": "hu-tieu-nam-vang-kho-sot-tom-thit-42",
    "description": "Sợi hủ tiếu dai trụng lòng đỏ trứng, trộn sốt tương đen đặc sánh kèm tôm tươi, gan heo và tóp mỡ.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 45,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-009",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-28T10:00:00Z",
    "viewCount": 18187,
    "ratingAverage": 4.49,
    "ratingCount": 344,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 648,
      "protein": 27.4,
      "carbohydrates": 35.9,
      "fat": 33.4,
      "fiber": 3.9,
      "sodium": 497.4
    },
    "ingredients": [
      {
        "id": "ing-042-01",
        "recipeId": "rec-042",
        "name": "Hành tây củ lớn",
        "quantity": 2.2,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-042-02",
        "recipeId": "rec-042",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 2
      },
      {
        "id": "ing-042-03",
        "recipeId": "rec-042",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 3
      },
      {
        "id": "ing-042-04",
        "recipeId": "rec-042",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 4
      },
      {
        "id": "ing-042-05",
        "recipeId": "rec-042",
        "name": "Mộc nhĩ đen khô",
        "quantity": 44.1,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-042-06",
        "recipeId": "rec-042",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.3,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 6
      },
      {
        "id": "ing-042-07",
        "recipeId": "rec-042",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.2,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-042-08",
        "recipeId": "rec-042",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.3,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 8
      },
      {
        "id": "ing-042-09",
        "recipeId": "rec-042",
        "name": "Thảo quả khô",
        "quantity": 2.1,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-042-10",
        "recipeId": "rec-042",
        "name": "Hạt sen Huế tươi",
        "quantity": 150.8,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 10
      },
      {
        "id": "ing-042-11",
        "recipeId": "rec-042",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.4,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 11
      },
      {
        "id": "ing-042-12",
        "recipeId": "rec-042",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 51.1,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-042-01",
        "recipeId": "rec-042",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-042-02",
        "recipeId": "rec-042",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-042-03",
        "recipeId": "rec-042",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-042-04",
        "recipeId": "rec-042",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-042-05",
        "recipeId": "rec-042",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-042-06",
        "recipeId": "rec-042",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-042-01",
        "recipeId": "rec-042",
        "originalUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "altText": "Hủ Tiếu Nam Vang Khô Sốt Tôm Thịt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-043",
    "title": "Mì Xào Giòn Hải Sản Rau Củ Sốt Nâu",
    "slug": "mi-xao-gion-hai-san-rau-cu-sot-nau-43",
    "description": "Vắt mì trứng chiên phồng xốp giòn tan chan nước sốt hải sản rau cải ngồng xanh mướt sánh mịn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-009",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-22T10:00:00Z",
    "viewCount": 1446,
    "ratingAverage": 4.9,
    "ratingCount": 142,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 684,
      "protein": 36.0,
      "carbohydrates": 78.2,
      "fat": 24.7,
      "fiber": 2.6,
      "sodium": 871.6
    },
    "ingredients": [
      {
        "id": "ing-043-01",
        "recipeId": "rec-043",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 1
      },
      {
        "id": "ing-043-02",
        "recipeId": "rec-043",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 47.5,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 2
      },
      {
        "id": "ing-043-03",
        "recipeId": "rec-043",
        "name": "Chanh tươi mọng nước",
        "quantity": 1.9,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 3
      },
      {
        "id": "ing-043-04",
        "recipeId": "rec-043",
        "name": "Mộc nhĩ đen khô",
        "quantity": 42.6,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-043-05",
        "recipeId": "rec-043",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 5
      },
      {
        "id": "ing-043-06",
        "recipeId": "rec-043",
        "name": "Hoa hồi khô",
        "quantity": 4.6,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 6
      },
      {
        "id": "ing-043-07",
        "recipeId": "rec-043",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.2,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-043-08",
        "recipeId": "rec-043",
        "name": "Miến dong làng So",
        "quantity": 99.0,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 8
      },
      {
        "id": "ing-043-09",
        "recipeId": "rec-043",
        "name": "Dấm gạo nếp thơm",
        "quantity": 48.0,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 9
      },
      {
        "id": "ing-043-10",
        "recipeId": "rec-043",
        "name": "Bột năng tinh chế",
        "quantity": 107.0,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 10
      },
      {
        "id": "ing-043-11",
        "recipeId": "rec-043",
        "name": "Đường phèn kết tinh",
        "quantity": 32.9,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 11
      },
      {
        "id": "ing-043-12",
        "recipeId": "rec-043",
        "name": "Giá đỗ tươi sạch",
        "quantity": 193.4,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 12
      },
      {
        "id": "ing-043-13",
        "recipeId": "rec-043",
        "name": "Lạc rang đập dập",
        "quantity": 88.6,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-043-01",
        "recipeId": "rec-043",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-043-02",
        "recipeId": "rec-043",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-043-03",
        "recipeId": "rec-043",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-043-04",
        "recipeId": "rec-043",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-043-05",
        "recipeId": "rec-043",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-043-01",
        "recipeId": "rec-043",
        "originalUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "altText": "Mì Xào Giòn Hải Sản Rau Củ Sốt Nâu",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-044",
    "title": "Cao Lầu Hội An Thịt Xá Xíu Da Heo Chiên",
    "slug": "cao-lau-hoi-an-thit-xa-xiu-da-heo-chien-44",
    "description": "Món ăn di sản phố Hội với sợi mì ngâm tro củi, thịt xá xíu mềm thơm và tép mỡ chiên giòn rụm.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 20,
    "servings": 8,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-009",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-14T10:00:00Z",
    "viewCount": 6017,
    "ratingAverage": 4.95,
    "ratingCount": 191,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 283,
      "protein": 36.6,
      "carbohydrates": 36.8,
      "fat": 16.0,
      "fiber": 6.6,
      "sodium": 826.7
    },
    "ingredients": [
      {
        "id": "ing-044-01",
        "recipeId": "rec-044",
        "name": "Thịt nạc vai heo băm",
        "quantity": 284.0,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 1
      },
      {
        "id": "ing-044-02",
        "recipeId": "rec-044",
        "name": "Dấm gạo nếp thơm",
        "quantity": 49.2,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 2
      },
      {
        "id": "ing-044-03",
        "recipeId": "rec-044",
        "name": "Lạc rang đập dập",
        "quantity": 84.5,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 3
      },
      {
        "id": "ing-044-04",
        "recipeId": "rec-044",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.1,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 4
      },
      {
        "id": "ing-044-05",
        "recipeId": "rec-044",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.3,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 5
      },
      {
        "id": "ing-044-06",
        "recipeId": "rec-044",
        "name": "Mè trắng rang thơm",
        "quantity": 32.4,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 6
      },
      {
        "id": "ing-044-07",
        "recipeId": "rec-044",
        "name": "Hành tây củ lớn",
        "quantity": 2.3,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-044-08",
        "recipeId": "rec-044",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 256.4,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 8
      },
      {
        "id": "ing-044-09",
        "recipeId": "rec-044",
        "name": "Lá chanh non",
        "quantity": 10.0,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 9
      },
      {
        "id": "ing-044-10",
        "recipeId": "rec-044",
        "name": "Chanh tươi mọng nước",
        "quantity": 1.9,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-044-01",
        "recipeId": "rec-044",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-044-02",
        "recipeId": "rec-044",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-044-03",
        "recipeId": "rec-044",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-044-04",
        "recipeId": "rec-044",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-044-05",
        "recipeId": "rec-044",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-044-06",
        "recipeId": "rec-044",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-044-01",
        "recipeId": "rec-044",
        "originalUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "altText": "Cao Lầu Hội An Thịt Xá Xíu Da Heo Chiên",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-045",
    "title": "Bún Chả Hà Nội Than Hoa Nước Mắm Đu Đủ",
    "slug": "bun-cha-ha-noi-than-hoa-nuoc-mam-du-du-45",
    "description": "Chả băm chả miếng nướng vàng rộm khói thả vào bát nước mắm chua ngọt dưa góp đu đủ giòn sần sật.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 45,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-009",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-24T10:00:00Z",
    "viewCount": 9280,
    "ratingAverage": 4.77,
    "ratingCount": 206,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 526,
      "protein": 32.4,
      "carbohydrates": 45.9,
      "fat": 12.2,
      "fiber": 5.1,
      "sodium": 1017.9
    },
    "ingredients": [
      {
        "id": "ing-045-01",
        "recipeId": "rec-045",
        "name": "Rau răm tươi",
        "quantity": 48.9,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 1
      },
      {
        "id": "ing-045-02",
        "recipeId": "rec-045",
        "name": "Sả cây tươi thơm",
        "quantity": 6.3,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 2
      },
      {
        "id": "ing-045-03",
        "recipeId": "rec-045",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 3
      },
      {
        "id": "ing-045-04",
        "recipeId": "rec-045",
        "name": "Ớt hiểm tươi",
        "quantity": 4.1,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-045-05",
        "recipeId": "rec-045",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 1.9,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 5
      },
      {
        "id": "ing-045-06",
        "recipeId": "rec-045",
        "name": "Dầu thực vật cao cấp",
        "quantity": 47.3,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 6
      },
      {
        "id": "ing-045-07",
        "recipeId": "rec-045",
        "name": "Lạc rang đập dập",
        "quantity": 76.8,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 7
      },
      {
        "id": "ing-045-08",
        "recipeId": "rec-045",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.4,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 8
      },
      {
        "id": "ing-045-09",
        "recipeId": "rec-045",
        "name": "Mè trắng rang thơm",
        "quantity": 32.4,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 9
      },
      {
        "id": "ing-045-10",
        "recipeId": "rec-045",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 244.9,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 10
      },
      {
        "id": "ing-045-11",
        "recipeId": "rec-045",
        "name": "Đường phèn kết tinh",
        "quantity": 28.6,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 11
      },
      {
        "id": "ing-045-12",
        "recipeId": "rec-045",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.1,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 12
      },
      {
        "id": "ing-045-13",
        "recipeId": "rec-045",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.3,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-045-01",
        "recipeId": "rec-045",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-045-02",
        "recipeId": "rec-045",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-045-03",
        "recipeId": "rec-045",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-045-04",
        "recipeId": "rec-045",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-045-05",
        "recipeId": "rec-045",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-045-06",
        "recipeId": "rec-045",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-045-07",
        "recipeId": "rec-045",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-045-01",
        "recipeId": "rec-045",
        "originalUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "altText": "Bún Chả Hà Nội Than Hoa Nước Mắm Đu Đủ",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-046",
    "title": "Bánh Mì Kẹp Thịt Nguội Pate Gan Béo",
    "slug": "banh-mi-kep-thit-nguoi-pate-gan-beo-46",
    "description": "Chiếc bánh mì nóng hổi giòn rụm quết lớp pate béo ngậy, bơ tươi, dưa leo ngò rí và sốt ớt cay cay.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-010",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-01T10:00:00Z",
    "viewCount": 6604,
    "ratingAverage": 4.96,
    "ratingCount": 292,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 421,
      "protein": 24.3,
      "carbohydrates": 49.0,
      "fat": 18.3,
      "fiber": 7.5,
      "sodium": 667.5
    },
    "ingredients": [
      {
        "id": "ing-046-01",
        "recipeId": "rec-046",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 55.9,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 1
      },
      {
        "id": "ing-046-02",
        "recipeId": "rec-046",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 0.9,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 2
      },
      {
        "id": "ing-046-03",
        "recipeId": "rec-046",
        "name": "Su hào tươi",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 3
      },
      {
        "id": "ing-046-04",
        "recipeId": "rec-046",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 4
      },
      {
        "id": "ing-046-05",
        "recipeId": "rec-046",
        "name": "Rau húng quế & ngò gai",
        "quantity": 193.2,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 5
      },
      {
        "id": "ing-046-06",
        "recipeId": "rec-046",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-046-07",
        "recipeId": "rec-046",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 7
      },
      {
        "id": "ing-046-08",
        "recipeId": "rec-046",
        "name": "Lạc rang đập dập",
        "quantity": 75.1,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 8
      },
      {
        "id": "ing-046-09",
        "recipeId": "rec-046",
        "name": "Đậu xanh xát vỏ",
        "quantity": 205.2,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 9
      },
      {
        "id": "ing-046-10",
        "recipeId": "rec-046",
        "name": "Thịt nạc vai heo băm",
        "quantity": 312.1,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-046-01",
        "recipeId": "rec-046",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-046-02",
        "recipeId": "rec-046",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-046-03",
        "recipeId": "rec-046",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-046-04",
        "recipeId": "rec-046",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-046-05",
        "recipeId": "rec-046",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-046-06",
        "recipeId": "rec-046",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-046-01",
        "recipeId": "rec-046",
        "originalUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Mì Kẹp Thịt Nguội Pate Gan Béo",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-047",
    "title": "Bánh Mì Chảo Bò Xíu Mại Trứng Ốp La",
    "slug": "banh-mi-chao-bo-xiu-mai-trung-op-la-47",
    "description": "Chảo gang xèo xèo miếng bít tết bò mềm, viên xíu mại đẫm sốt cà và quả trứng ốp la lòng đào tan chảy.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 90,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-010",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-02T10:00:00Z",
    "viewCount": 10105,
    "ratingAverage": 4.89,
    "ratingCount": 419,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 333,
      "protein": 47.0,
      "carbohydrates": 71.3,
      "fat": 18.4,
      "fiber": 2.3,
      "sodium": 660.5
    },
    "ingredients": [
      {
        "id": "ing-047-01",
        "recipeId": "rec-047",
        "name": "Đường phèn kết tinh",
        "quantity": 33.8,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 1
      },
      {
        "id": "ing-047-02",
        "recipeId": "rec-047",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.6,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 2
      },
      {
        "id": "ing-047-03",
        "recipeId": "rec-047",
        "name": "Thịt tôm sú tươi",
        "quantity": 386.0,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 3
      },
      {
        "id": "ing-047-04",
        "recipeId": "rec-047",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.2,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 4
      },
      {
        "id": "ing-047-05",
        "recipeId": "rec-047",
        "name": "Hạt sen Huế tươi",
        "quantity": 173.6,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 5
      },
      {
        "id": "ing-047-06",
        "recipeId": "rec-047",
        "name": "Mộc nhĩ đen khô",
        "quantity": 44.1,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 6
      },
      {
        "id": "ing-047-07",
        "recipeId": "rec-047",
        "name": "Giá đỗ tươi sạch",
        "quantity": 226.1,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 7
      },
      {
        "id": "ing-047-08",
        "recipeId": "rec-047",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 297.8,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 8
      },
      {
        "id": "ing-047-09",
        "recipeId": "rec-047",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.2,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 9
      },
      {
        "id": "ing-047-10",
        "recipeId": "rec-047",
        "name": "Miến dong làng So",
        "quantity": 119.1,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 10
      },
      {
        "id": "ing-047-11",
        "recipeId": "rec-047",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.5,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 11
      },
      {
        "id": "ing-047-12",
        "recipeId": "rec-047",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-047-01",
        "recipeId": "rec-047",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-047-02",
        "recipeId": "rec-047",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-047-03",
        "recipeId": "rec-047",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-047-04",
        "recipeId": "rec-047",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-047-05",
        "recipeId": "rec-047",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-047-06",
        "recipeId": "rec-047",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-047-01",
        "recipeId": "rec-047",
        "originalUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Mì Chảo Bò Xíu Mại Trứng Ốp La",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-048",
    "title": "Bánh Mì Thịt Nướng Sả Sa Tế Sài Gòn",
    "slug": "banh-mi-thit-nuong-sa-sa-te-sai-gon-48",
    "description": "Từng xiên thịt nạc dăm ướp sả ớt nướng chín tới kẹp cùng đồ chua cà rốt củ cải giòn ngọt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 20,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-010",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-01T10:00:00Z",
    "viewCount": 14258,
    "ratingAverage": 4.91,
    "ratingCount": 405,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 386,
      "protein": 42.9,
      "carbohydrates": 81.7,
      "fat": 35.6,
      "fiber": 4.3,
      "sodium": 739.1
    },
    "ingredients": [
      {
        "id": "ing-048-01",
        "recipeId": "rec-048",
        "name": "Thịt tôm sú tươi",
        "quantity": 325.0,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 1
      },
      {
        "id": "ing-048-02",
        "recipeId": "rec-048",
        "name": "Mộc nhĩ đen khô",
        "quantity": 38.2,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-048-03",
        "recipeId": "rec-048",
        "name": "Thảo quả khô",
        "quantity": 1.9,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 3
      },
      {
        "id": "ing-048-04",
        "recipeId": "rec-048",
        "name": "Muối hạt tinh khiết",
        "quantity": 1.9,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 4
      },
      {
        "id": "ing-048-05",
        "recipeId": "rec-048",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.1,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 5
      },
      {
        "id": "ing-048-06",
        "recipeId": "rec-048",
        "name": "Ớt hiểm tươi",
        "quantity": 4.0,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-048-07",
        "recipeId": "rec-048",
        "name": "Miến dong làng So",
        "quantity": 91.7,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 7
      },
      {
        "id": "ing-048-08",
        "recipeId": "rec-048",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.0,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 8
      },
      {
        "id": "ing-048-09",
        "recipeId": "rec-048",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 47.9,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 9
      },
      {
        "id": "ing-048-10",
        "recipeId": "rec-048",
        "name": "Dầu thực vật cao cấp",
        "quantity": 54.4,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 10
      },
      {
        "id": "ing-048-11",
        "recipeId": "rec-048",
        "name": "Giá đỗ tươi sạch",
        "quantity": 183.9,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 11
      },
      {
        "id": "ing-048-12",
        "recipeId": "rec-048",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 0.9,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 12
      },
      {
        "id": "ing-048-13",
        "recipeId": "rec-048",
        "name": "Rau xà lách mỡ",
        "quantity": 326.4,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-048-01",
        "recipeId": "rec-048",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-048-02",
        "recipeId": "rec-048",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-048-03",
        "recipeId": "rec-048",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-048-04",
        "recipeId": "rec-048",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-048-05",
        "recipeId": "rec-048",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-048-06",
        "recipeId": "rec-048",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-048-07",
        "recipeId": "rec-048",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-048-01",
        "recipeId": "rec-048",
        "originalUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Mì Thịt Nướng Sả Sa Tế Sài Gòn",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-049",
    "title": "Bánh Bao Nhân Thịt Trứng Muối Vỏ Xốp",
    "slug": "banh-bao-nhan-thit-trung-muoi-vo-xop-49",
    "description": "Vỏ bánh trắng muốt mềm xốp như mây ôm trọn nhân thịt heo băm nấm hương và lòng đỏ trứng muối bùi béo.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 90,
    "servings": 4,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-010",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-27T10:00:00Z",
    "viewCount": 2676,
    "ratingAverage": 4.9,
    "ratingCount": 272,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 749,
      "protein": 20.0,
      "carbohydrates": 29.7,
      "fat": 11.9,
      "fiber": 3.2,
      "sodium": 642.3
    },
    "ingredients": [
      {
        "id": "ing-049-01",
        "recipeId": "rec-049",
        "name": "Mộc nhĩ đen khô",
        "quantity": 37.2,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-049-02",
        "recipeId": "rec-049",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.0,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 2
      },
      {
        "id": "ing-049-03",
        "recipeId": "rec-049",
        "name": "Thịt tôm sú tươi",
        "quantity": 406.7,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 3
      },
      {
        "id": "ing-049-04",
        "recipeId": "rec-049",
        "name": "Rau húng quế & ngò gai",
        "quantity": 204.4,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 4
      },
      {
        "id": "ing-049-05",
        "recipeId": "rec-049",
        "name": "Bột năng tinh chế",
        "quantity": 96.5,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 5
      },
      {
        "id": "ing-049-06",
        "recipeId": "rec-049",
        "name": "Rau răm tươi",
        "quantity": 57.7,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 6
      },
      {
        "id": "ing-049-07",
        "recipeId": "rec-049",
        "name": "Giá đỗ tươi sạch",
        "quantity": 235.9,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 7
      },
      {
        "id": "ing-049-08",
        "recipeId": "rec-049",
        "name": "Quế thanh khô",
        "quantity": 2.1,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 8
      },
      {
        "id": "ing-049-09",
        "recipeId": "rec-049",
        "name": "Hành tây củ lớn",
        "quantity": 2.2,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-049-10",
        "recipeId": "rec-049",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.5,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 10
      },
      {
        "id": "ing-049-11",
        "recipeId": "rec-049",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 50.1,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 11
      },
      {
        "id": "ing-049-12",
        "recipeId": "rec-049",
        "name": "Nấm hương khô thơm",
        "quantity": 48.7,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 12
      },
      {
        "id": "ing-049-13",
        "recipeId": "rec-049",
        "name": "Thịt nạc vai heo băm",
        "quantity": 270.1,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-049-01",
        "recipeId": "rec-049",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-049-02",
        "recipeId": "rec-049",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-049-03",
        "recipeId": "rec-049",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-049-04",
        "recipeId": "rec-049",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-049-05",
        "recipeId": "rec-049",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-049-01",
        "recipeId": "rec-049",
        "originalUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Bao Nhân Thịt Trứng Muối Vỏ Xốp",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-050",
    "title": "Xôi Mặn Thập Cẩm Chà Bông Lạp Xưởng",
    "slug": "xoi-man-thap-cam-cha-bong-lap-xuong-50",
    "description": "Hạt xôi nếp cái hoa vàng dẻo quánh rưới mỡ hành thơm phức, phủ đầy lạp xưởng, chả lụa và ruốc thịt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 45,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-010",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-02T10:00:00Z",
    "viewCount": 14690,
    "ratingAverage": 4.96,
    "ratingCount": 71,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 410,
      "protein": 20.2,
      "carbohydrates": 83.1,
      "fat": 22.1,
      "fiber": 3.3,
      "sodium": 663.1
    },
    "ingredients": [
      {
        "id": "ing-050-01",
        "recipeId": "rec-050",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 1
      },
      {
        "id": "ing-050-02",
        "recipeId": "rec-050",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.6,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 2
      },
      {
        "id": "ing-050-03",
        "recipeId": "rec-050",
        "name": "Gừng già tươi",
        "quantity": 104.8,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 3
      },
      {
        "id": "ing-050-04",
        "recipeId": "rec-050",
        "name": "Rau húng quế & ngò gai",
        "quantity": 201.0,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 4
      },
      {
        "id": "ing-050-05",
        "recipeId": "rec-050",
        "name": "Mè trắng rang thơm",
        "quantity": 27.0,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 5
      },
      {
        "id": "ing-050-06",
        "recipeId": "rec-050",
        "name": "Dầu thực vật cao cấp",
        "quantity": 56.8,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 6
      },
      {
        "id": "ing-050-07",
        "recipeId": "rec-050",
        "name": "Ớt hiểm tươi",
        "quantity": 4.2,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-050-08",
        "recipeId": "rec-050",
        "name": "Lá chanh non",
        "quantity": 9.6,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 8
      },
      {
        "id": "ing-050-09",
        "recipeId": "rec-050",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.4,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 9
      },
      {
        "id": "ing-050-10",
        "recipeId": "rec-050",
        "name": "Trứng gà ta tươi",
        "quantity": 3.1,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 10
      },
      {
        "id": "ing-050-11",
        "recipeId": "rec-050",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-050-01",
        "recipeId": "rec-050",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-050-02",
        "recipeId": "rec-050",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-050-03",
        "recipeId": "rec-050",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-050-04",
        "recipeId": "rec-050",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-050-05",
        "recipeId": "rec-050",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-050-01",
        "recipeId": "rec-050",
        "originalUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
        "altText": "Xôi Mặn Thập Cẩm Chà Bông Lạp Xưởng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-051",
    "title": "Chè Khúc Bạch Hạnh Nhân Trái Vải",
    "slug": "che-khuc-bach-hanh-nhan-trai-vai-51",
    "description": "Từng viên khúc bạch phô mai sữa béo ngậy thanh mát trong nước đường phèn nhãn vải ngọt dịu.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 20,
    "servings": 6,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-011",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-21T10:00:00Z",
    "viewCount": 9153,
    "ratingAverage": 5.0,
    "ratingCount": 404,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 595,
      "protein": 18.4,
      "carbohydrates": 34.2,
      "fat": 16.9,
      "fiber": 3.6,
      "sodium": 886.0
    },
    "ingredients": [
      {
        "id": "ing-051-01",
        "recipeId": "rec-051",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.5,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 1
      },
      {
        "id": "ing-051-02",
        "recipeId": "rec-051",
        "name": "Mộc nhĩ đen khô",
        "quantity": 44.6,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-051-03",
        "recipeId": "rec-051",
        "name": "Thịt thăn bò tươi",
        "quantity": 539.7,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 3
      },
      {
        "id": "ing-051-04",
        "recipeId": "rec-051",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.0,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 4
      },
      {
        "id": "ing-051-05",
        "recipeId": "rec-051",
        "name": "Giá đỗ tươi sạch",
        "quantity": 202.7,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 5
      },
      {
        "id": "ing-051-06",
        "recipeId": "rec-051",
        "name": "Dấm gạo nếp thơm",
        "quantity": 48.6,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 6
      },
      {
        "id": "ing-051-07",
        "recipeId": "rec-051",
        "name": "Thịt nạc vai heo băm",
        "quantity": 289.8,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 7
      },
      {
        "id": "ing-051-08",
        "recipeId": "rec-051",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.0,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 8
      },
      {
        "id": "ing-051-09",
        "recipeId": "rec-051",
        "name": "Quế thanh khô",
        "quantity": 1.9,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 9
      },
      {
        "id": "ing-051-10",
        "recipeId": "rec-051",
        "name": "Thịt tôm sú tươi",
        "quantity": 380.9,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-051-01",
        "recipeId": "rec-051",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-051-02",
        "recipeId": "rec-051",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-051-03",
        "recipeId": "rec-051",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-051-04",
        "recipeId": "rec-051",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-051-05",
        "recipeId": "rec-051",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-051-01",
        "recipeId": "rec-051",
        "originalUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "altText": "Chè Khúc Bạch Hạnh Nhân Trái Vải",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-052",
    "title": "Chè Bưởi An Giang Giòn Sần Sật",
    "slug": "che-buoi-an-giang-gion-san-sat-52",
    "description": "Cùi bưởi sơ chế kỹ giòn sần sật không hề đắng nấu cùng đậu xanh xát vỏ và nước cốt dừa sánh mịn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 45,
    "servings": 8,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-011",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-02T10:00:00Z",
    "viewCount": 2830,
    "ratingAverage": 4.63,
    "ratingCount": 316,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 732,
      "protein": 45.7,
      "carbohydrates": 42.4,
      "fat": 13.9,
      "fiber": 3.3,
      "sodium": 1138.3
    },
    "ingredients": [
      {
        "id": "ing-052-01",
        "recipeId": "rec-052",
        "name": "Rau xà lách mỡ",
        "quantity": 347.8,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 1
      },
      {
        "id": "ing-052-02",
        "recipeId": "rec-052",
        "name": "Thảo quả khô",
        "quantity": 2.1,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-052-03",
        "recipeId": "rec-052",
        "name": "Gừng già tươi",
        "quantity": 98.7,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 3
      },
      {
        "id": "ing-052-04",
        "recipeId": "rec-052",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.7,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 4
      },
      {
        "id": "ing-052-05",
        "recipeId": "rec-052",
        "name": "Hành hoa & ngò rí",
        "quantity": 149.7,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 5
      },
      {
        "id": "ing-052-06",
        "recipeId": "rec-052",
        "name": "Đường phèn kết tinh",
        "quantity": 30.7,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 6
      },
      {
        "id": "ing-052-07",
        "recipeId": "rec-052",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.0,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 7
      },
      {
        "id": "ing-052-08",
        "recipeId": "rec-052",
        "name": "Lạc rang đập dập",
        "quantity": 84.0,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 8
      },
      {
        "id": "ing-052-09",
        "recipeId": "rec-052",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 9
      },
      {
        "id": "ing-052-10",
        "recipeId": "rec-052",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.3,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 10
      },
      {
        "id": "ing-052-11",
        "recipeId": "rec-052",
        "name": "Rau húng quế & ngò gai",
        "quantity": 234.7,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 11
      },
      {
        "id": "ing-052-12",
        "recipeId": "rec-052",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 47.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-052-01",
        "recipeId": "rec-052",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-052-02",
        "recipeId": "rec-052",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-052-03",
        "recipeId": "rec-052",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-052-04",
        "recipeId": "rec-052",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-052-05",
        "recipeId": "rec-052",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-052-06",
        "recipeId": "rec-052",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-052-01",
        "recipeId": "rec-052",
        "originalUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "altText": "Chè Bưởi An Giang Giòn Sần Sật",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-053",
    "title": "Chè Hạt Sen Long Nhãn Cung Đình Huế",
    "slug": "che-hat-sen-long-nhan-cung-dinh-hue-53",
    "description": "Hạt sen bùi béo bọc khéo léo trong múi long nhãn giòn ngọt ngào nấu đường phèn thanh mát.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 30,
    "servings": 6,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-011",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-08T10:00:00Z",
    "viewCount": 10792,
    "ratingAverage": 4.44,
    "ratingCount": 332,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 705,
      "protein": 34.5,
      "carbohydrates": 30.1,
      "fat": 20.2,
      "fiber": 6.4,
      "sodium": 1068.4
    },
    "ingredients": [
      {
        "id": "ing-053-01",
        "recipeId": "rec-053",
        "name": "Gừng già tươi",
        "quantity": 112.6,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 1
      },
      {
        "id": "ing-053-02",
        "recipeId": "rec-053",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 2
      },
      {
        "id": "ing-053-03",
        "recipeId": "rec-053",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 236.5,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 3
      },
      {
        "id": "ing-053-04",
        "recipeId": "rec-053",
        "name": "Thịt tôm sú tươi",
        "quantity": 366.7,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 4
      },
      {
        "id": "ing-053-05",
        "recipeId": "rec-053",
        "name": "Tỏi khô cô đơn",
        "quantity": 5.8,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 5
      },
      {
        "id": "ing-053-06",
        "recipeId": "rec-053",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 6
      },
      {
        "id": "ing-053-07",
        "recipeId": "rec-053",
        "name": "Ớt hiểm tươi",
        "quantity": 4.1,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-053-08",
        "recipeId": "rec-053",
        "name": "Lạc rang đập dập",
        "quantity": 78.7,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 8
      },
      {
        "id": "ing-053-09",
        "recipeId": "rec-053",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 9
      },
      {
        "id": "ing-053-10",
        "recipeId": "rec-053",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.8,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-053-01",
        "recipeId": "rec-053",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-053-02",
        "recipeId": "rec-053",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-053-03",
        "recipeId": "rec-053",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-053-04",
        "recipeId": "rec-053",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-053-05",
        "recipeId": "rec-053",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-053-01",
        "recipeId": "rec-053",
        "originalUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "altText": "Chè Hạt Sen Long Nhãn Cung Đình Huế",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-054",
    "title": "Bánh Flan Caramel Cà Phê Trứng Béo",
    "slug": "banh-flan-caramel-ca-phe-trung-beo-54",
    "description": "Bánh flan mềm mịn không rỗ khí tan ngay trên đầu lưỡi cùng lớp sốt đắng nhẹ của caramel cà phê đậm đặc.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 60,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-011",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 4573,
    "ratingAverage": 4.59,
    "ratingCount": 368,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 722,
      "protein": 44.1,
      "carbohydrates": 77.9,
      "fat": 12.1,
      "fiber": 4.5,
      "sodium": 512.7
    },
    "ingredients": [
      {
        "id": "ing-054-01",
        "recipeId": "rec-054",
        "name": "Gừng già tươi",
        "quantity": 93.8,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 1
      },
      {
        "id": "ing-054-02",
        "recipeId": "rec-054",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 283.7,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 2
      },
      {
        "id": "ing-054-03",
        "recipeId": "rec-054",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.0,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 3
      },
      {
        "id": "ing-054-04",
        "recipeId": "rec-054",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 56.3,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 4
      },
      {
        "id": "ing-054-05",
        "recipeId": "rec-054",
        "name": "Dầu thực vật cao cấp",
        "quantity": 57.0,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 5
      },
      {
        "id": "ing-054-06",
        "recipeId": "rec-054",
        "name": "Miến dong làng So",
        "quantity": 110.5,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 6
      },
      {
        "id": "ing-054-07",
        "recipeId": "rec-054",
        "name": "Rau xà lách mỡ",
        "quantity": 333.8,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 7
      },
      {
        "id": "ing-054-08",
        "recipeId": "rec-054",
        "name": "Đậu xanh xát vỏ",
        "quantity": 192.7,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 8
      },
      {
        "id": "ing-054-09",
        "recipeId": "rec-054",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 9
      },
      {
        "id": "ing-054-10",
        "recipeId": "rec-054",
        "name": "Giá đỗ tươi sạch",
        "quantity": 216.2,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 10
      },
      {
        "id": "ing-054-11",
        "recipeId": "rec-054",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 11
      },
      {
        "id": "ing-054-12",
        "recipeId": "rec-054",
        "name": "Tỏi khô cô đơn",
        "quantity": 5.9,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-054-01",
        "recipeId": "rec-054",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-054-02",
        "recipeId": "rec-054",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-054-03",
        "recipeId": "rec-054",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-054-04",
        "recipeId": "rec-054",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-054-05",
        "recipeId": "rec-054",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-054-06",
        "recipeId": "rec-054",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-054-07",
        "recipeId": "rec-054",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-054-01",
        "recipeId": "rec-054",
        "originalUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Flan Caramel Cà Phê Trứng Béo",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-055",
    "title": "Chè Ba Màu Đậu Đỏ Đậu Xanh Thạch Thơm",
    "slug": "che-ba-mau-dau-do-dau-xanh-thach-thom-55",
    "description": "Ly chè rực rỡ sắc màu miền Tây với đậu đỏ bùi bùi, đậu xanh tán nhuyễn, thạch lá dứa và cốt dừa béo ngậy.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 20,
    "servings": 6,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-011",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-23T10:00:00Z",
    "viewCount": 8703,
    "ratingAverage": 4.81,
    "ratingCount": 262,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 406,
      "protein": 20.4,
      "carbohydrates": 53.4,
      "fat": 34.9,
      "fiber": 6.2,
      "sodium": 694.2
    },
    "ingredients": [
      {
        "id": "ing-055-01",
        "recipeId": "rec-055",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 45.5,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 1
      },
      {
        "id": "ing-055-02",
        "recipeId": "rec-055",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.1,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 2
      },
      {
        "id": "ing-055-03",
        "recipeId": "rec-055",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 3
      },
      {
        "id": "ing-055-04",
        "recipeId": "rec-055",
        "name": "Hạt sen Huế tươi",
        "quantity": 170.7,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 4
      },
      {
        "id": "ing-055-05",
        "recipeId": "rec-055",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 0.9,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 5
      },
      {
        "id": "ing-055-06",
        "recipeId": "rec-055",
        "name": "Nấm hương khô thơm",
        "quantity": 47.4,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 6
      },
      {
        "id": "ing-055-07",
        "recipeId": "rec-055",
        "name": "Hành hoa & ngò rí",
        "quantity": 162.0,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 7
      },
      {
        "id": "ing-055-08",
        "recipeId": "rec-055",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.2,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 8
      },
      {
        "id": "ing-055-09",
        "recipeId": "rec-055",
        "name": "Dấm gạo nếp thơm",
        "quantity": 51.1,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 9
      },
      {
        "id": "ing-055-10",
        "recipeId": "rec-055",
        "name": "Mộc nhĩ đen khô",
        "quantity": 36.7,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-055-11",
        "recipeId": "rec-055",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.8,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-055-01",
        "recipeId": "rec-055",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-055-02",
        "recipeId": "rec-055",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-055-03",
        "recipeId": "rec-055",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-055-04",
        "recipeId": "rec-055",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-055-05",
        "recipeId": "rec-055",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-055-01",
        "recipeId": "rec-055",
        "originalUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        "altText": "Chè Ba Màu Đậu Đỏ Đậu Xanh Thạch Thơm",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-056",
    "title": "Trà Đào Cam Sả Mát Lạnh Mùa Hè",
    "slug": "tra-dao-cam-sa-mat-lanh-mua-he-56",
    "description": "Vị chát dịu của trà đen hòa quyện cùng đào ngâm giòn ngọt, tinh dầu sả tươi và nước cốt cam mọng nước.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 40,
    "servings": 8,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-012",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-24T10:00:00Z",
    "viewCount": 14944,
    "ratingAverage": 4.73,
    "ratingCount": 210,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 730,
      "protein": 23.0,
      "carbohydrates": 55.9,
      "fat": 32.2,
      "fiber": 7.5,
      "sodium": 583.1
    },
    "ingredients": [
      {
        "id": "ing-056-01",
        "recipeId": "rec-056",
        "name": "Lạc rang đập dập",
        "quantity": 73.0,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 1
      },
      {
        "id": "ing-056-02",
        "recipeId": "rec-056",
        "name": "Dầu thực vật cao cấp",
        "quantity": 58.8,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 2
      },
      {
        "id": "ing-056-03",
        "recipeId": "rec-056",
        "name": "Thịt nạc vai heo băm",
        "quantity": 356.3,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 3
      },
      {
        "id": "ing-056-04",
        "recipeId": "rec-056",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 237.1,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 4
      },
      {
        "id": "ing-056-05",
        "recipeId": "rec-056",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 5
      },
      {
        "id": "ing-056-06",
        "recipeId": "rec-056",
        "name": "Đậu xanh xát vỏ",
        "quantity": 230.7,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 6
      },
      {
        "id": "ing-056-07",
        "recipeId": "rec-056",
        "name": "Lá chanh non",
        "quantity": 11.2,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 7
      },
      {
        "id": "ing-056-08",
        "recipeId": "rec-056",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 0.9,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 8
      },
      {
        "id": "ing-056-09",
        "recipeId": "rec-056",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.3,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 9
      },
      {
        "id": "ing-056-10",
        "recipeId": "rec-056",
        "name": "Hạt sen Huế tươi",
        "quantity": 143.1,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 10
      },
      {
        "id": "ing-056-11",
        "recipeId": "rec-056",
        "name": "Thảo quả khô",
        "quantity": 2.3,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-056-01",
        "recipeId": "rec-056",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-056-02",
        "recipeId": "rec-056",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-056-03",
        "recipeId": "rec-056",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-056-04",
        "recipeId": "rec-056",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-056-05",
        "recipeId": "rec-056",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-056-06",
        "recipeId": "rec-056",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-056-01",
        "recipeId": "rec-056",
        "originalUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "altText": "Trà Đào Cam Sả Mát Lạnh Mùa Hè",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-057",
    "title": "Trà Sen Vàng Hạt Sen Kem Cheese",
    "slug": "tra-sen-vang-hat-sen-kem-cheese-57",
    "description": "Hương thơm thanh khiết của trà sen Bảo Lộc kết hợp hạt sen nấu mềm và lớp kem cheese béo mặn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 20,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-012",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-01T10:00:00Z",
    "viewCount": 1277,
    "ratingAverage": 4.72,
    "ratingCount": 365,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 538,
      "protein": 18.8,
      "carbohydrates": 37.7,
      "fat": 35.2,
      "fiber": 8.1,
      "sodium": 893.7
    },
    "ingredients": [
      {
        "id": "ing-057-01",
        "recipeId": "rec-057",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-057-02",
        "recipeId": "rec-057",
        "name": "Hành tây củ lớn",
        "quantity": 2.3,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-057-03",
        "recipeId": "rec-057",
        "name": "Thịt thăn bò tươi",
        "quantity": 545.4,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 3
      },
      {
        "id": "ing-057-04",
        "recipeId": "rec-057",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.1,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-057-05",
        "recipeId": "rec-057",
        "name": "Thịt tôm sú tươi",
        "quantity": 403.4,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 5
      },
      {
        "id": "ing-057-06",
        "recipeId": "rec-057",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 6
      },
      {
        "id": "ing-057-07",
        "recipeId": "rec-057",
        "name": "Dấm gạo nếp thơm",
        "quantity": 53.9,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 7
      },
      {
        "id": "ing-057-08",
        "recipeId": "rec-057",
        "name": "Bột năng tinh chế",
        "quantity": 114.1,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 8
      },
      {
        "id": "ing-057-09",
        "recipeId": "rec-057",
        "name": "Dầu thực vật cao cấp",
        "quantity": 53.4,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 9
      },
      {
        "id": "ing-057-10",
        "recipeId": "rec-057",
        "name": "Rau răm tươi",
        "quantity": 54.5,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 10
      },
      {
        "id": "ing-057-11",
        "recipeId": "rec-057",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 2.9,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-057-01",
        "recipeId": "rec-057",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-057-02",
        "recipeId": "rec-057",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-057-03",
        "recipeId": "rec-057",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-057-04",
        "recipeId": "rec-057",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-057-05",
        "recipeId": "rec-057",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-057-06",
        "recipeId": "rec-057",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-057-07",
        "recipeId": "rec-057",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-057-01",
        "recipeId": "rec-057",
        "originalUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "altText": "Trà Sen Vàng Hạt Sen Kem Cheese",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-058",
    "title": "Cà Phê Muối Xứ Huế Béo Mặn Đậm Đà",
    "slug": "ca-phe-muoi-xu-hue-beo-man-dam-da-58",
    "description": "Cà phê phin truyền thống thơm đượm hòa cùng lớp kem sữa mặn nhẹ bồng bềnh quyến rũ.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-012",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-28T10:00:00Z",
    "viewCount": 12948,
    "ratingAverage": 4.64,
    "ratingCount": 58,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 529,
      "protein": 27.8,
      "carbohydrates": 54.0,
      "fat": 19.0,
      "fiber": 3.3,
      "sodium": 745.2
    },
    "ingredients": [
      {
        "id": "ing-058-01",
        "recipeId": "rec-058",
        "name": "Hạt sen Huế tươi",
        "quantity": 169.6,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 1
      },
      {
        "id": "ing-058-02",
        "recipeId": "rec-058",
        "name": "Su hào tươi",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-058-03",
        "recipeId": "rec-058",
        "name": "Trứng gà ta tươi",
        "quantity": 3.5,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 3
      },
      {
        "id": "ing-058-04",
        "recipeId": "rec-058",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 56.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 4
      },
      {
        "id": "ing-058-05",
        "recipeId": "rec-058",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.4,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 5
      },
      {
        "id": "ing-058-06",
        "recipeId": "rec-058",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 6
      },
      {
        "id": "ing-058-07",
        "recipeId": "rec-058",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-058-08",
        "recipeId": "rec-058",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.7,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 8
      },
      {
        "id": "ing-058-09",
        "recipeId": "rec-058",
        "name": "Giá đỗ tươi sạch",
        "quantity": 198.9,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 9
      },
      {
        "id": "ing-058-10",
        "recipeId": "rec-058",
        "name": "Ớt hiểm tươi",
        "quantity": 4.3,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-058-01",
        "recipeId": "rec-058",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-058-02",
        "recipeId": "rec-058",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-058-03",
        "recipeId": "rec-058",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-058-04",
        "recipeId": "rec-058",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-058-05",
        "recipeId": "rec-058",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-058-06",
        "recipeId": "rec-058",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-058-07",
        "recipeId": "rec-058",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-058-01",
        "recipeId": "rec-058",
        "originalUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "altText": "Cà Phê Muối Xứ Huế Béo Mặn Đậm Đà",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-059",
    "title": "Trà Hoa Cúc Mật Ong Táo Đỏ An Thần",
    "slug": "tra-hoa-cuc-mat-ong-tao-do-an-than-59",
    "description": "Ấm trà hoa cúc vàng ấm nóng tỏa hương thơm dịu nhẹ giúp thư giãn tinh thần sau ngày dài bận rộn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-012",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-28T10:00:00Z",
    "viewCount": 7596,
    "ratingAverage": 4.86,
    "ratingCount": 319,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 348,
      "protein": 24.6,
      "carbohydrates": 55.1,
      "fat": 20.6,
      "fiber": 8.0,
      "sodium": 839.3
    },
    "ingredients": [
      {
        "id": "ing-059-01",
        "recipeId": "rec-059",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 51.3,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 1
      },
      {
        "id": "ing-059-02",
        "recipeId": "rec-059",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 2
      },
      {
        "id": "ing-059-03",
        "recipeId": "rec-059",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 243.3,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 3
      },
      {
        "id": "ing-059-04",
        "recipeId": "rec-059",
        "name": "Rau húng quế & ngò gai",
        "quantity": 230.7,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 4
      },
      {
        "id": "ing-059-05",
        "recipeId": "rec-059",
        "name": "Ớt hiểm tươi",
        "quantity": 4.1,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 5
      },
      {
        "id": "ing-059-06",
        "recipeId": "rec-059",
        "name": "Dưa leo tươi giòn",
        "quantity": 1.8,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 6
      },
      {
        "id": "ing-059-07",
        "recipeId": "rec-059",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 51.6,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 7
      },
      {
        "id": "ing-059-08",
        "recipeId": "rec-059",
        "name": "Su hào tươi",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-059-09",
        "recipeId": "rec-059",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.2,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 9
      },
      {
        "id": "ing-059-10",
        "recipeId": "rec-059",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 10
      },
      {
        "id": "ing-059-11",
        "recipeId": "rec-059",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.9,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 11
      },
      {
        "id": "ing-059-12",
        "recipeId": "rec-059",
        "name": "Dầu thực vật cao cấp",
        "quantity": 56.0,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-059-01",
        "recipeId": "rec-059",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-059-02",
        "recipeId": "rec-059",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-059-03",
        "recipeId": "rec-059",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-059-04",
        "recipeId": "rec-059",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-059-05",
        "recipeId": "rec-059",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-059-06",
        "recipeId": "rec-059",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-059-01",
        "recipeId": "rec-059",
        "originalUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "altText": "Trà Hoa Cúc Mật Ong Táo Đỏ An Thần",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-060",
    "title": "Sinh Tố Bơ Sầu Riêng Sữa Đặc Béo Ngậy",
    "slug": "sinh-to-bo-sau-rieng-sua-dac-beo-ngay-60",
    "description": "Bơ sáp Đắk Lắk dẻo quánh xay cùng cơm sầu riêng Ri6 thơm lừng và sữa tươi nguyên kem mát lạnh.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-012",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 8990,
    "ratingAverage": 4.72,
    "ratingCount": 373,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 327,
      "protein": 20.0,
      "carbohydrates": 34.6,
      "fat": 22.7,
      "fiber": 3.7,
      "sodium": 741.6
    },
    "ingredients": [
      {
        "id": "ing-060-01",
        "recipeId": "rec-060",
        "name": "Rau húng quế & ngò gai",
        "quantity": 236.2,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 1
      },
      {
        "id": "ing-060-02",
        "recipeId": "rec-060",
        "name": "Lá dứa nếp thơm",
        "quantity": 6.0,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 2
      },
      {
        "id": "ing-060-03",
        "recipeId": "rec-060",
        "name": "Thảo quả khô",
        "quantity": 1.9,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 3
      },
      {
        "id": "ing-060-04",
        "recipeId": "rec-060",
        "name": "Sả cây tươi thơm",
        "quantity": 5.7,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 4
      },
      {
        "id": "ing-060-05",
        "recipeId": "rec-060",
        "name": "Bột năng tinh chế",
        "quantity": 108.5,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 5
      },
      {
        "id": "ing-060-06",
        "recipeId": "rec-060",
        "name": "Quế thanh khô",
        "quantity": 2.3,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 6
      },
      {
        "id": "ing-060-07",
        "recipeId": "rec-060",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 57.4,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 7
      },
      {
        "id": "ing-060-08",
        "recipeId": "rec-060",
        "name": "Hành hoa & ngò rí",
        "quantity": 146.7,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 8
      },
      {
        "id": "ing-060-09",
        "recipeId": "rec-060",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 9
      },
      {
        "id": "ing-060-10",
        "recipeId": "rec-060",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-060-11",
        "recipeId": "rec-060",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.8,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-060-01",
        "recipeId": "rec-060",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-060-02",
        "recipeId": "rec-060",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-060-03",
        "recipeId": "rec-060",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-060-04",
        "recipeId": "rec-060",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-060-05",
        "recipeId": "rec-060",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-060-06",
        "recipeId": "rec-060",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-060-01",
        "recipeId": "rec-060",
        "originalUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        "altText": "Sinh Tố Bơ Sầu Riêng Sữa Đặc Béo Ngậy",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-061",
    "title": "Lẩu Thái Hải Sản Tôm Sú Chua Cay",
    "slug": "lau-thai-hai-san-tom-su-chua-cay-61",
    "description": "Nồi lẩu sôi sùng sục đượm vị riềng sả lá chanh cốt dừa, ngập tràn tôm sú mực nang và nghêu tươi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 40,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-013",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-22T10:00:00Z",
    "viewCount": 4717,
    "ratingAverage": 4.53,
    "ratingCount": 246,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 647,
      "protein": 38.8,
      "carbohydrates": 58.6,
      "fat": 27.8,
      "fiber": 7.7,
      "sodium": 753.2
    },
    "ingredients": [
      {
        "id": "ing-061-01",
        "recipeId": "rec-061",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 1
      },
      {
        "id": "ing-061-02",
        "recipeId": "rec-061",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 2
      },
      {
        "id": "ing-061-03",
        "recipeId": "rec-061",
        "name": "Giá đỗ tươi sạch",
        "quantity": 231.8,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 3
      },
      {
        "id": "ing-061-04",
        "recipeId": "rec-061",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.1,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 4
      },
      {
        "id": "ing-061-05",
        "recipeId": "rec-061",
        "name": "Dầu thực vật cao cấp",
        "quantity": 50.6,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 5
      },
      {
        "id": "ing-061-06",
        "recipeId": "rec-061",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 1.9,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 6
      },
      {
        "id": "ing-061-07",
        "recipeId": "rec-061",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 53.5,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 7
      },
      {
        "id": "ing-061-08",
        "recipeId": "rec-061",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 8
      },
      {
        "id": "ing-061-09",
        "recipeId": "rec-061",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-061-10",
        "recipeId": "rec-061",
        "name": "Gừng già tươi",
        "quantity": 91.3,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 10
      },
      {
        "id": "ing-061-11",
        "recipeId": "rec-061",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 11
      },
      {
        "id": "ing-061-12",
        "recipeId": "rec-061",
        "name": "Rau húng quế & ngò gai",
        "quantity": 204.2,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-061-01",
        "recipeId": "rec-061",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-061-02",
        "recipeId": "rec-061",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-061-03",
        "recipeId": "rec-061",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-061-04",
        "recipeId": "rec-061",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-061-05",
        "recipeId": "rec-061",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-061-06",
        "recipeId": "rec-061",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-061-01",
        "recipeId": "rec-061",
        "originalUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "altText": "Lẩu Thái Hải Sản Tôm Sú Chua Cay",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-062",
    "title": "Lẩu Gà Lá É Phú Yên Đậm Đà Thảo Mộc",
    "slug": "lau-ga-la-e-phu-yen-dam-da-thao-moc-62",
    "description": "Thịt gà thả vườn săn chắc ngọt thịt nấu cùng măng tươi và đọt lá é the mát cay cay đầu lưỡi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-013",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 9331,
    "ratingAverage": 4.57,
    "ratingCount": 194,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 638,
      "protein": 30.8,
      "carbohydrates": 74.7,
      "fat": 32.8,
      "fiber": 6.9,
      "sodium": 754.3
    },
    "ingredients": [
      {
        "id": "ing-062-01",
        "recipeId": "rec-062",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.3,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 1
      },
      {
        "id": "ing-062-02",
        "recipeId": "rec-062",
        "name": "Rau xà lách mỡ",
        "quantity": 338.5,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 2
      },
      {
        "id": "ing-062-03",
        "recipeId": "rec-062",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 3
      },
      {
        "id": "ing-062-04",
        "recipeId": "rec-062",
        "name": "Thảo quả khô",
        "quantity": 1.9,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-062-05",
        "recipeId": "rec-062",
        "name": "Su hào tươi",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-062-06",
        "recipeId": "rec-062",
        "name": "Hành tây củ lớn",
        "quantity": 2.0,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 6
      },
      {
        "id": "ing-062-07",
        "recipeId": "rec-062",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 56.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 7
      },
      {
        "id": "ing-062-08",
        "recipeId": "rec-062",
        "name": "Mộc nhĩ đen khô",
        "quantity": 42.4,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-062-09",
        "recipeId": "rec-062",
        "name": "Lá chanh non",
        "quantity": 9.0,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 9
      },
      {
        "id": "ing-062-10",
        "recipeId": "rec-062",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 239.2,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 10
      },
      {
        "id": "ing-062-11",
        "recipeId": "rec-062",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.4,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-062-01",
        "recipeId": "rec-062",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-062-02",
        "recipeId": "rec-062",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-062-03",
        "recipeId": "rec-062",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-062-04",
        "recipeId": "rec-062",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-062-05",
        "recipeId": "rec-062",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-062-01",
        "recipeId": "rec-062",
        "originalUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "altText": "Lẩu Gà Lá É Phú Yên Đậm Đà Thảo Mộc",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-063",
    "title": "Lẩu Bò Nhúng Dấm Tươi Rau Rừng",
    "slug": "lau-bo-nhung-dam-tuoi-rau-rung-63",
    "description": "Nước dùng chua thanh từ nước dừa và giấm gạo, nhúng thịt bắp bò mềm ngọt cuốn bánh tráng rau rừng chấm mắm nêm.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-013",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-06T10:00:00Z",
    "viewCount": 13758,
    "ratingAverage": 4.43,
    "ratingCount": 242,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 398,
      "protein": 40.3,
      "carbohydrates": 76.4,
      "fat": 24.0,
      "fiber": 3.4,
      "sodium": 899.2
    },
    "ingredients": [
      {
        "id": "ing-063-01",
        "recipeId": "rec-063",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 1
      },
      {
        "id": "ing-063-02",
        "recipeId": "rec-063",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.2,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 2
      },
      {
        "id": "ing-063-03",
        "recipeId": "rec-063",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.2,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 3
      },
      {
        "id": "ing-063-04",
        "recipeId": "rec-063",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-063-05",
        "recipeId": "rec-063",
        "name": "Sả cây tươi thơm",
        "quantity": 6.7,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 5
      },
      {
        "id": "ing-063-06",
        "recipeId": "rec-063",
        "name": "Đậu xanh xát vỏ",
        "quantity": 186.8,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 6
      },
      {
        "id": "ing-063-07",
        "recipeId": "rec-063",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 7
      },
      {
        "id": "ing-063-08",
        "recipeId": "rec-063",
        "name": "Bột năng tinh chế",
        "quantity": 111.8,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 8
      },
      {
        "id": "ing-063-09",
        "recipeId": "rec-063",
        "name": "Mè trắng rang thơm",
        "quantity": 35.8,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 9
      },
      {
        "id": "ing-063-10",
        "recipeId": "rec-063",
        "name": "Thảo quả khô",
        "quantity": 2.2,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-063-01",
        "recipeId": "rec-063",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-063-02",
        "recipeId": "rec-063",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-063-03",
        "recipeId": "rec-063",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-063-04",
        "recipeId": "rec-063",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-063-05",
        "recipeId": "rec-063",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-063-06",
        "recipeId": "rec-063",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-063-07",
        "recipeId": "rec-063",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-063-01",
        "recipeId": "rec-063",
        "originalUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "altText": "Lẩu Bò Nhúng Dấm Tươi Rau Rừng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-064",
    "title": "Lẩu Nấm Chim Bồ Câu Thanh Bổ",
    "slug": "lau-nam-chim-bo-cau-thanh-bo-64",
    "description": "Nước lẩu ngọt lịm từ thịt chim bồ câu hầm hạt sen, nhúng đủ loại nấm tươi quý như nấm tùng nhung, nấm đùi gà.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-013",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-22T10:00:00Z",
    "viewCount": 17937,
    "ratingAverage": 4.45,
    "ratingCount": 313,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 497,
      "protein": 45.4,
      "carbohydrates": 74.2,
      "fat": 27.4,
      "fiber": 5.3,
      "sodium": 662.8
    },
    "ingredients": [
      {
        "id": "ing-064-01",
        "recipeId": "rec-064",
        "name": "Lạc rang đập dập",
        "quantity": 79.2,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 1
      },
      {
        "id": "ing-064-02",
        "recipeId": "rec-064",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.5,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 2
      },
      {
        "id": "ing-064-03",
        "recipeId": "rec-064",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 2.9,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 3
      },
      {
        "id": "ing-064-04",
        "recipeId": "rec-064",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 48.4,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 4
      },
      {
        "id": "ing-064-05",
        "recipeId": "rec-064",
        "name": "Nấm hương khô thơm",
        "quantity": 50.9,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 5
      },
      {
        "id": "ing-064-06",
        "recipeId": "rec-064",
        "name": "Quế thanh khô",
        "quantity": 2.0,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 6
      },
      {
        "id": "ing-064-07",
        "recipeId": "rec-064",
        "name": "Rau húng quế & ngò gai",
        "quantity": 233.6,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 7
      },
      {
        "id": "ing-064-08",
        "recipeId": "rec-064",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.4,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 8
      },
      {
        "id": "ing-064-09",
        "recipeId": "rec-064",
        "name": "Đường phèn kết tinh",
        "quantity": 30.2,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 9
      },
      {
        "id": "ing-064-10",
        "recipeId": "rec-064",
        "name": "Trứng gà ta tươi",
        "quantity": 2.8,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 10
      },
      {
        "id": "ing-064-11",
        "recipeId": "rec-064",
        "name": "Thịt thăn bò tươi",
        "quantity": 490.4,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 11
      },
      {
        "id": "ing-064-12",
        "recipeId": "rec-064",
        "name": "Dưa leo tươi giòn",
        "quantity": 1.9,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-064-01",
        "recipeId": "rec-064",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-064-02",
        "recipeId": "rec-064",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-064-03",
        "recipeId": "rec-064",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-064-04",
        "recipeId": "rec-064",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-064-05",
        "recipeId": "rec-064",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-064-06",
        "recipeId": "rec-064",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-064-07",
        "recipeId": "rec-064",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-064-01",
        "recipeId": "rec-064",
        "originalUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "altText": "Lẩu Nấm Chim Bồ Câu Thanh Bổ",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-065",
    "title": "Lẩu Cua Đồng Hột Vịt Lộn Thanh Mát",
    "slug": "lau-cua-dong-hot-vit-lon-thanh-mat-65",
    "description": "Gạch cua đồng đóng tảng vàng óng trên mặt nước lẩu riêu cà chua thơm nức, thêm trứng vịt lộn ngọt đậm đà.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 30,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-013",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-02T10:00:00Z",
    "viewCount": 16019,
    "ratingAverage": 4.83,
    "ratingCount": 100,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 492,
      "protein": 30.5,
      "carbohydrates": 72.7,
      "fat": 11.3,
      "fiber": 6.5,
      "sodium": 936.3
    },
    "ingredients": [
      {
        "id": "ing-065-01",
        "recipeId": "rec-065",
        "name": "Lá chanh non",
        "quantity": 9.9,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 1
      },
      {
        "id": "ing-065-02",
        "recipeId": "rec-065",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.2,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 2
      },
      {
        "id": "ing-065-03",
        "recipeId": "rec-065",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 51.2,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 3
      },
      {
        "id": "ing-065-04",
        "recipeId": "rec-065",
        "name": "Sả cây tươi thơm",
        "quantity": 6.1,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 4
      },
      {
        "id": "ing-065-05",
        "recipeId": "rec-065",
        "name": "Mè trắng rang thơm",
        "quantity": 31.8,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 5
      },
      {
        "id": "ing-065-06",
        "recipeId": "rec-065",
        "name": "Gừng già tươi",
        "quantity": 113.8,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 6
      },
      {
        "id": "ing-065-07",
        "recipeId": "rec-065",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.5,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 7
      },
      {
        "id": "ing-065-08",
        "recipeId": "rec-065",
        "name": "Hành hoa & ngò rí",
        "quantity": 143.8,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 8
      },
      {
        "id": "ing-065-09",
        "recipeId": "rec-065",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.1,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-065-10",
        "recipeId": "rec-065",
        "name": "Thịt nạc vai heo băm",
        "quantity": 290.5,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 10
      },
      {
        "id": "ing-065-11",
        "recipeId": "rec-065",
        "name": "Hành tây củ lớn",
        "quantity": 2.3,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 11
      },
      {
        "id": "ing-065-12",
        "recipeId": "rec-065",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 12
      },
      {
        "id": "ing-065-13",
        "recipeId": "rec-065",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.1,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-065-01",
        "recipeId": "rec-065",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-065-02",
        "recipeId": "rec-065",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-065-03",
        "recipeId": "rec-065",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-065-04",
        "recipeId": "rec-065",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-065-05",
        "recipeId": "rec-065",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-065-01",
        "recipeId": "rec-065",
        "originalUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        "altText": "Lẩu Cua Đồng Hột Vịt Lộn Thanh Mát",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-066",
    "title": "Bánh Tráng Nướng Đà Lạt Trứng Cút Mỡ Hành",
    "slug": "banh-trang-nuong-da-lat-trung-cut-mo-hanh-66",
    "description": "Pizza Việt Nam nướng than giòn rụm với trứng cút, xúc xích, khô bò, ruốc tôm và sốt tương ớt mayonnaise.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-014",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-25T10:00:00Z",
    "viewCount": 17583,
    "ratingAverage": 4.73,
    "ratingCount": 320,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 700,
      "protein": 38.4,
      "carbohydrates": 67.7,
      "fat": 19.5,
      "fiber": 7.8,
      "sodium": 625.1
    },
    "ingredients": [
      {
        "id": "ing-066-01",
        "recipeId": "rec-066",
        "name": "Miến dong làng So",
        "quantity": 97.5,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 1
      },
      {
        "id": "ing-066-02",
        "recipeId": "rec-066",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.2,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 2
      },
      {
        "id": "ing-066-03",
        "recipeId": "rec-066",
        "name": "Muối hạt tinh khiết",
        "quantity": 1.9,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 3
      },
      {
        "id": "ing-066-04",
        "recipeId": "rec-066",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 2.8,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 4
      },
      {
        "id": "ing-066-05",
        "recipeId": "rec-066",
        "name": "Sả cây tươi thơm",
        "quantity": 6.2,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 5
      },
      {
        "id": "ing-066-06",
        "recipeId": "rec-066",
        "name": "Ớt hiểm tươi",
        "quantity": 3.7,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-066-07",
        "recipeId": "rec-066",
        "name": "Lạc rang đập dập",
        "quantity": 74.5,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 7
      },
      {
        "id": "ing-066-08",
        "recipeId": "rec-066",
        "name": "Giá đỗ tươi sạch",
        "quantity": 216.9,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 8
      },
      {
        "id": "ing-066-09",
        "recipeId": "rec-066",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.5,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 9
      },
      {
        "id": "ing-066-10",
        "recipeId": "rec-066",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 10
      },
      {
        "id": "ing-066-11",
        "recipeId": "rec-066",
        "name": "Hành hoa & ngò rí",
        "quantity": 160.3,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 11
      },
      {
        "id": "ing-066-12",
        "recipeId": "rec-066",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 237.1,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 12
      },
      {
        "id": "ing-066-13",
        "recipeId": "rec-066",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 51.4,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-066-01",
        "recipeId": "rec-066",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-066-02",
        "recipeId": "rec-066",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-066-03",
        "recipeId": "rec-066",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-066-04",
        "recipeId": "rec-066",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-066-05",
        "recipeId": "rec-066",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-066-01",
        "recipeId": "rec-066",
        "originalUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Tráng Nướng Đà Lạt Trứng Cút Mỡ Hành",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-067",
    "title": "Bắp Xào Bơ Tép Khô Cay Thơm",
    "slug": "bap-xao-bo-tep-kho-cay-thom-67",
    "description": "Hạt bắp nếp ngọt dẻo xào đẫm bơ Tường An thơm phức cùng tép đồng rang và hành hoa xanh mướt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 40,
    "servings": 2,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-014",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-27T10:00:00Z",
    "viewCount": 17768,
    "ratingAverage": 4.8,
    "ratingCount": 274,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 727,
      "protein": 18.2,
      "carbohydrates": 37.0,
      "fat": 9.9,
      "fiber": 3.1,
      "sodium": 472.1
    },
    "ingredients": [
      {
        "id": "ing-067-01",
        "recipeId": "rec-067",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.2,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-067-02",
        "recipeId": "rec-067",
        "name": "Đậu xanh xát vỏ",
        "quantity": 206.1,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 2
      },
      {
        "id": "ing-067-03",
        "recipeId": "rec-067",
        "name": "Mè trắng rang thơm",
        "quantity": 34.6,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 3
      },
      {
        "id": "ing-067-04",
        "recipeId": "rec-067",
        "name": "Lạc rang đập dập",
        "quantity": 95.2,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 4
      },
      {
        "id": "ing-067-05",
        "recipeId": "rec-067",
        "name": "Rau xà lách mỡ",
        "quantity": 298.7,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 5
      },
      {
        "id": "ing-067-06",
        "recipeId": "rec-067",
        "name": "Bột năng tinh chế",
        "quantity": 117.7,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 6
      },
      {
        "id": "ing-067-07",
        "recipeId": "rec-067",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-067-08",
        "recipeId": "rec-067",
        "name": "Dấm gạo nếp thơm",
        "quantity": 53.5,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 8
      },
      {
        "id": "ing-067-09",
        "recipeId": "rec-067",
        "name": "Muối hạt tinh khiết",
        "quantity": 1.9,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 9
      },
      {
        "id": "ing-067-10",
        "recipeId": "rec-067",
        "name": "Ớt hiểm tươi",
        "quantity": 4.3,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 10
      },
      {
        "id": "ing-067-11",
        "recipeId": "rec-067",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 0.9,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 11
      },
      {
        "id": "ing-067-12",
        "recipeId": "rec-067",
        "name": "Hành tây củ lớn",
        "quantity": 2.3,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-067-01",
        "recipeId": "rec-067",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-067-02",
        "recipeId": "rec-067",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-067-03",
        "recipeId": "rec-067",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-067-04",
        "recipeId": "rec-067",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-067-05",
        "recipeId": "rec-067",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-067-06",
        "recipeId": "rec-067",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-067-07",
        "recipeId": "rec-067",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-067-01",
        "recipeId": "rec-067",
        "originalUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "altText": "Bắp Xào Bơ Tép Khô Cay Thơm",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-068",
    "title": "Phá Lấu Bò Nước Cốt Dừa Chấm Bánh Mì",
    "slug": "pha-lau-bo-nuoc-cot-dua-cham-banh-mi-68",
    "description": "Nội tạng bò làm sạch ninh mềm đượm ngũ vị hương và nước cốt dừa béo thơm chấm bánh mì giòn tan.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 20,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-014",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-04T10:00:00Z",
    "viewCount": 3652,
    "ratingAverage": 4.76,
    "ratingCount": 181,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 412,
      "protein": 48.4,
      "carbohydrates": 25.8,
      "fat": 20.2,
      "fiber": 4.3,
      "sodium": 1079.1
    },
    "ingredients": [
      {
        "id": "ing-068-01",
        "recipeId": "rec-068",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 1.8,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 1
      },
      {
        "id": "ing-068-02",
        "recipeId": "rec-068",
        "name": "Hành tây củ lớn",
        "quantity": 2.3,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 2
      },
      {
        "id": "ing-068-03",
        "recipeId": "rec-068",
        "name": "Ớt hiểm tươi",
        "quantity": 3.6,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 3
      },
      {
        "id": "ing-068-04",
        "recipeId": "rec-068",
        "name": "Lá chanh non",
        "quantity": 9.1,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 4
      },
      {
        "id": "ing-068-05",
        "recipeId": "rec-068",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.4,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 5
      },
      {
        "id": "ing-068-06",
        "recipeId": "rec-068",
        "name": "Miến dong làng So",
        "quantity": 101.2,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 6
      },
      {
        "id": "ing-068-07",
        "recipeId": "rec-068",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 7
      },
      {
        "id": "ing-068-08",
        "recipeId": "rec-068",
        "name": "Thịt thăn bò tươi",
        "quantity": 569.9,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 8
      },
      {
        "id": "ing-068-09",
        "recipeId": "rec-068",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 9
      },
      {
        "id": "ing-068-10",
        "recipeId": "rec-068",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 227.8,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 10
      },
      {
        "id": "ing-068-11",
        "recipeId": "rec-068",
        "name": "Bột năng tinh chế",
        "quantity": 116.8,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 11
      },
      {
        "id": "ing-068-12",
        "recipeId": "rec-068",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-068-01",
        "recipeId": "rec-068",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-068-02",
        "recipeId": "rec-068",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-068-03",
        "recipeId": "rec-068",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-068-04",
        "recipeId": "rec-068",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-068-05",
        "recipeId": "rec-068",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-068-06",
        "recipeId": "rec-068",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-068-01",
        "recipeId": "rec-068",
        "originalUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "altText": "Phá Lấu Bò Nước Cốt Dừa Chấm Bánh Mì",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-069",
    "title": "Ốc Hương Xào Bơ Tỏi Bắp Ngọt",
    "slug": "oc-huong-xao-bo-toi-bap-ngot-69",
    "description": "Ốc hương biển tươi giòn sần sật ngập trong sốt bơ tỏi vàng ươm thơm lừng ăn kèm bánh mì nóng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-014",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-28T10:00:00Z",
    "viewCount": 3015,
    "ratingAverage": 4.44,
    "ratingCount": 152,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 715,
      "protein": 34.6,
      "carbohydrates": 28.2,
      "fat": 25.3,
      "fiber": 5.6,
      "sodium": 1075.7
    },
    "ingredients": [
      {
        "id": "ing-069-01",
        "recipeId": "rec-069",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.1,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 1
      },
      {
        "id": "ing-069-02",
        "recipeId": "rec-069",
        "name": "Đậu xanh xát vỏ",
        "quantity": 183.7,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 2
      },
      {
        "id": "ing-069-03",
        "recipeId": "rec-069",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.4,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 3
      },
      {
        "id": "ing-069-04",
        "recipeId": "rec-069",
        "name": "Nấm hương khô thơm",
        "quantity": 56.2,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 4
      },
      {
        "id": "ing-069-05",
        "recipeId": "rec-069",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 5
      },
      {
        "id": "ing-069-06",
        "recipeId": "rec-069",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.1,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-069-07",
        "recipeId": "rec-069",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.1,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 7
      },
      {
        "id": "ing-069-08",
        "recipeId": "rec-069",
        "name": "Lá chanh non",
        "quantity": 9.6,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 8
      },
      {
        "id": "ing-069-09",
        "recipeId": "rec-069",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.3,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 9
      },
      {
        "id": "ing-069-10",
        "recipeId": "rec-069",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.2,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 10
      },
      {
        "id": "ing-069-11",
        "recipeId": "rec-069",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.5,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 11
      },
      {
        "id": "ing-069-12",
        "recipeId": "rec-069",
        "name": "Giá đỗ tươi sạch",
        "quantity": 189.9,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-069-01",
        "recipeId": "rec-069",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-069-02",
        "recipeId": "rec-069",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-069-03",
        "recipeId": "rec-069",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-069-04",
        "recipeId": "rec-069",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-069-05",
        "recipeId": "rec-069",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-069-06",
        "recipeId": "rec-069",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-069-07",
        "recipeId": "rec-069",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-069-01",
        "recipeId": "rec-069",
        "originalUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "altText": "Ốc Hương Xào Bơ Tỏi Bắp Ngọt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-070",
    "title": "Chân Gà Rút Xương Sốt Thái Cóc Non",
    "slug": "chan-ga-rut-xuong-sot-thai-coc-non-70",
    "description": "Chân gà giòn sần sật ngấm đẫm sốt me cay mặn ngọt kiểu Thái cùng cóc non chua giòn và sả tắc thơm mát.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 40,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-014",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-02T10:00:00Z",
    "viewCount": 13986,
    "ratingAverage": 4.6,
    "ratingCount": 150,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 428,
      "protein": 27.2,
      "carbohydrates": 46.6,
      "fat": 15.7,
      "fiber": 7.0,
      "sodium": 854.7
    },
    "ingredients": [
      {
        "id": "ing-070-01",
        "recipeId": "rec-070",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-070-02",
        "recipeId": "rec-070",
        "name": "Rau răm tươi",
        "quantity": 52.5,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 2
      },
      {
        "id": "ing-070-03",
        "recipeId": "rec-070",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 3
      },
      {
        "id": "ing-070-04",
        "recipeId": "rec-070",
        "name": "Lạc rang đập dập",
        "quantity": 75.9,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 4
      },
      {
        "id": "ing-070-05",
        "recipeId": "rec-070",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 5
      },
      {
        "id": "ing-070-06",
        "recipeId": "rec-070",
        "name": "Lá chanh non",
        "quantity": 11.6,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 6
      },
      {
        "id": "ing-070-07",
        "recipeId": "rec-070",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.9,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 7
      },
      {
        "id": "ing-070-08",
        "recipeId": "rec-070",
        "name": "Miến dong làng So",
        "quantity": 100.5,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 8
      },
      {
        "id": "ing-070-09",
        "recipeId": "rec-070",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.5,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 9
      },
      {
        "id": "ing-070-10",
        "recipeId": "rec-070",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.2,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-070-01",
        "recipeId": "rec-070",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-070-02",
        "recipeId": "rec-070",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-070-03",
        "recipeId": "rec-070",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-070-04",
        "recipeId": "rec-070",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-070-05",
        "recipeId": "rec-070",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-070-06",
        "recipeId": "rec-070",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-070-07",
        "recipeId": "rec-070",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-070-01",
        "recipeId": "rec-070",
        "originalUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "altText": "Chân Gà Rút Xương Sốt Thái Cóc Non",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-071",
    "title": "Cá Chẽm Hấp Tàu Xì Hong Kong",
    "slug": "ca-chem-hap-tau-xi-hong-kong-71",
    "description": "Thịt cá chẽm tươi ngọt tự nhiên hấp cùng nước tương hảo hạng, hành gừng thái chỉ và rưới dầu sôi thơm lừng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-015",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-08T10:00:00Z",
    "viewCount": 13513,
    "ratingAverage": 4.6,
    "ratingCount": 316,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 496,
      "protein": 35.9,
      "carbohydrates": 29.8,
      "fat": 10.1,
      "fiber": 6.0,
      "sodium": 1040.1
    },
    "ingredients": [
      {
        "id": "ing-071-01",
        "recipeId": "rec-071",
        "name": "Thịt thăn bò tươi",
        "quantity": 484.7,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 1
      },
      {
        "id": "ing-071-02",
        "recipeId": "rec-071",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 2
      },
      {
        "id": "ing-071-03",
        "recipeId": "rec-071",
        "name": "Miến dong làng So",
        "quantity": 93.2,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 3
      },
      {
        "id": "ing-071-04",
        "recipeId": "rec-071",
        "name": "Rau xà lách mỡ",
        "quantity": 291.0,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 4
      },
      {
        "id": "ing-071-05",
        "recipeId": "rec-071",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 250.2,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 5
      },
      {
        "id": "ing-071-06",
        "recipeId": "rec-071",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 2.7,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 6
      },
      {
        "id": "ing-071-07",
        "recipeId": "rec-071",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.7,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 7
      },
      {
        "id": "ing-071-08",
        "recipeId": "rec-071",
        "name": "Hành hoa & ngò rí",
        "quantity": 166.8,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 8
      },
      {
        "id": "ing-071-09",
        "recipeId": "rec-071",
        "name": "Sả cây tươi thơm",
        "quantity": 7.0,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 9
      },
      {
        "id": "ing-071-10",
        "recipeId": "rec-071",
        "name": "Nấm hương khô thơm",
        "quantity": 45.9,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 10
      },
      {
        "id": "ing-071-11",
        "recipeId": "rec-071",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.0,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 11
      },
      {
        "id": "ing-071-12",
        "recipeId": "rec-071",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 12
      },
      {
        "id": "ing-071-13",
        "recipeId": "rec-071",
        "name": "Thịt tôm sú tươi",
        "quantity": 354.4,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-071-01",
        "recipeId": "rec-071",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-071-02",
        "recipeId": "rec-071",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-071-03",
        "recipeId": "rec-071",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-071-04",
        "recipeId": "rec-071",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-071-05",
        "recipeId": "rec-071",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-071-06",
        "recipeId": "rec-071",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-071-01",
        "recipeId": "rec-071",
        "originalUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "altText": "Cá Chẽm Hấp Tàu Xì Hong Kong",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-072",
    "title": "Gà Ta Hấp Lá Chanh Giữ Trọn Vị Ngọt",
    "slug": "ga-ta-hap-la-chanh-giu-tron-vi-ngot-72",
    "description": "Da gà vàng óng giòn sần sật, từng thớ thịt ngọt lịm đượm tinh dầu lá chanh non chấm muối tiêu chanh.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 30,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-015",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-18T10:00:00Z",
    "viewCount": 6520,
    "ratingAverage": 4.93,
    "ratingCount": 414,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 631,
      "protein": 36.0,
      "carbohydrates": 41.6,
      "fat": 29.6,
      "fiber": 4.1,
      "sodium": 789.0
    },
    "ingredients": [
      {
        "id": "ing-072-01",
        "recipeId": "rec-072",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.1,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 1
      },
      {
        "id": "ing-072-02",
        "recipeId": "rec-072",
        "name": "Rau xà lách mỡ",
        "quantity": 292.9,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 2
      },
      {
        "id": "ing-072-03",
        "recipeId": "rec-072",
        "name": "Thịt nạc vai heo băm",
        "quantity": 288.2,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 3
      },
      {
        "id": "ing-072-04",
        "recipeId": "rec-072",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.3,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 4
      },
      {
        "id": "ing-072-05",
        "recipeId": "rec-072",
        "name": "Ớt hiểm tươi",
        "quantity": 4.5,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 5
      },
      {
        "id": "ing-072-06",
        "recipeId": "rec-072",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 6
      },
      {
        "id": "ing-072-07",
        "recipeId": "rec-072",
        "name": "Hạt sen Huế tươi",
        "quantity": 151.7,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 7
      },
      {
        "id": "ing-072-08",
        "recipeId": "rec-072",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.1,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 8
      },
      {
        "id": "ing-072-09",
        "recipeId": "rec-072",
        "name": "Nấm hương khô thơm",
        "quantity": 59.7,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 9
      },
      {
        "id": "ing-072-10",
        "recipeId": "rec-072",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 10
      },
      {
        "id": "ing-072-11",
        "recipeId": "rec-072",
        "name": "Mộc nhĩ đen khô",
        "quantity": 44.3,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 11
      },
      {
        "id": "ing-072-12",
        "recipeId": "rec-072",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 48.2,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-072-01",
        "recipeId": "rec-072",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-072-02",
        "recipeId": "rec-072",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-072-03",
        "recipeId": "rec-072",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-072-04",
        "recipeId": "rec-072",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-072-05",
        "recipeId": "rec-072",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-072-06",
        "recipeId": "rec-072",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-072-07",
        "recipeId": "rec-072",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-072-01",
        "recipeId": "rec-072",
        "originalUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "altText": "Gà Ta Hấp Lá Chanh Giữ Trọn Vị Ngọt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-073",
    "title": "Mực Trứng Hấp Hành Gừng Giòn Ngọt",
    "slug": "muc-trung-hap-hanh-gung-gion-ngot-73",
    "description": "Mực câu trong ngày bụng đầy ắp trứng béo bùi, hấp lửa lớn chín tới giữ trọn độ giòn ngọt mọng nước.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 30,
    "servings": 8,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-015",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-24T10:00:00Z",
    "viewCount": 14293,
    "ratingAverage": 4.83,
    "ratingCount": 198,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 717,
      "protein": 41.1,
      "carbohydrates": 38.3,
      "fat": 21.4,
      "fiber": 3.6,
      "sodium": 1103.9
    },
    "ingredients": [
      {
        "id": "ing-073-01",
        "recipeId": "rec-073",
        "name": "Hành hoa & ngò rí",
        "quantity": 155.8,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 1
      },
      {
        "id": "ing-073-02",
        "recipeId": "rec-073",
        "name": "Thịt tôm sú tươi",
        "quantity": 342.4,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 2
      },
      {
        "id": "ing-073-03",
        "recipeId": "rec-073",
        "name": "Bột năng tinh chế",
        "quantity": 91.9,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 3
      },
      {
        "id": "ing-073-04",
        "recipeId": "rec-073",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 4
      },
      {
        "id": "ing-073-05",
        "recipeId": "rec-073",
        "name": "Hoa hồi khô",
        "quantity": 5.5,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 5
      },
      {
        "id": "ing-073-06",
        "recipeId": "rec-073",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.9,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 6
      },
      {
        "id": "ing-073-07",
        "recipeId": "rec-073",
        "name": "Lạc rang đập dập",
        "quantity": 88.2,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 7
      },
      {
        "id": "ing-073-08",
        "recipeId": "rec-073",
        "name": "Thịt thăn bò tươi",
        "quantity": 552.5,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 8
      },
      {
        "id": "ing-073-09",
        "recipeId": "rec-073",
        "name": "Su hào tươi",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-073-10",
        "recipeId": "rec-073",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.4,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 10
      },
      {
        "id": "ing-073-11",
        "recipeId": "rec-073",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 11
      },
      {
        "id": "ing-073-12",
        "recipeId": "rec-073",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 2.9,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 12
      },
      {
        "id": "ing-073-13",
        "recipeId": "rec-073",
        "name": "Quế thanh khô",
        "quantity": 2.2,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-073-01",
        "recipeId": "rec-073",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-073-02",
        "recipeId": "rec-073",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-073-03",
        "recipeId": "rec-073",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-073-04",
        "recipeId": "rec-073",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-073-05",
        "recipeId": "rec-073",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-073-01",
        "recipeId": "rec-073",
        "originalUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "altText": "Mực Trứng Hấp Hành Gừng Giòn Ngọt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-074",
    "title": "Nấm Đông Cô Nhồi Thịt Hấp Sốt Dầu Hào",
    "slug": "nam-dong-co-nhoi-thit-hap-sot-dau-hao-74",
    "description": "Tai nấm hương tươi nhồi giò sống tôm thịt hấp chín rưới sốt dầu hào óng ánh đậm đà bổ dưỡng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-015",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-11T10:00:00Z",
    "viewCount": 11502,
    "ratingAverage": 4.79,
    "ratingCount": 343,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 386,
      "protein": 46.3,
      "carbohydrates": 49.2,
      "fat": 22.7,
      "fiber": 4.8,
      "sodium": 709.5
    },
    "ingredients": [
      {
        "id": "ing-074-01",
        "recipeId": "rec-074",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 52.9,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 1
      },
      {
        "id": "ing-074-02",
        "recipeId": "rec-074",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 2
      },
      {
        "id": "ing-074-03",
        "recipeId": "rec-074",
        "name": "Miến dong làng So",
        "quantity": 102.4,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 3
      },
      {
        "id": "ing-074-04",
        "recipeId": "rec-074",
        "name": "Gừng già tươi",
        "quantity": 113.2,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 4
      },
      {
        "id": "ing-074-05",
        "recipeId": "rec-074",
        "name": "Dầu thực vật cao cấp",
        "quantity": 51.0,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 5
      },
      {
        "id": "ing-074-06",
        "recipeId": "rec-074",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-074-07",
        "recipeId": "rec-074",
        "name": "Hoa hồi khô",
        "quantity": 5.3,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 7
      },
      {
        "id": "ing-074-08",
        "recipeId": "rec-074",
        "name": "Thịt thăn bò tươi",
        "quantity": 495.9,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 8
      },
      {
        "id": "ing-074-09",
        "recipeId": "rec-074",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 9
      },
      {
        "id": "ing-074-10",
        "recipeId": "rec-074",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 51.9,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 10
      },
      {
        "id": "ing-074-11",
        "recipeId": "rec-074",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 11
      },
      {
        "id": "ing-074-12",
        "recipeId": "rec-074",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-074-01",
        "recipeId": "rec-074",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-074-02",
        "recipeId": "rec-074",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-074-03",
        "recipeId": "rec-074",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-074-04",
        "recipeId": "rec-074",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-074-05",
        "recipeId": "rec-074",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-074-01",
        "recipeId": "rec-074",
        "originalUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "altText": "Nấm Đông Cô Nhồi Thịt Hấp Sốt Dầu Hào",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-075",
    "title": "Tôm Sú Hấp Bia Sả Tươi Thơm Lừng",
    "slug": "tom-su-hap-bia-sa-tuoi-thom-lung-75",
    "description": "Tôm sú biển to con hấp hơi bia tươi và những khúc sả đập dập thơm lừng chấm muối ớt chanh.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 45,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-015",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-19T10:00:00Z",
    "viewCount": 9226,
    "ratingAverage": 4.51,
    "ratingCount": 140,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 410,
      "protein": 28.1,
      "carbohydrates": 66.4,
      "fat": 26.1,
      "fiber": 3.1,
      "sodium": 701.0
    },
    "ingredients": [
      {
        "id": "ing-075-01",
        "recipeId": "rec-075",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 264.1,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 1
      },
      {
        "id": "ing-075-02",
        "recipeId": "rec-075",
        "name": "Mè trắng rang thơm",
        "quantity": 35.4,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 2
      },
      {
        "id": "ing-075-03",
        "recipeId": "rec-075",
        "name": "Rau húng quế & ngò gai",
        "quantity": 205.2,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 3
      },
      {
        "id": "ing-075-04",
        "recipeId": "rec-075",
        "name": "Dầu thực vật cao cấp",
        "quantity": 56.7,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 4
      },
      {
        "id": "ing-075-05",
        "recipeId": "rec-075",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.2,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 5
      },
      {
        "id": "ing-075-06",
        "recipeId": "rec-075",
        "name": "Ớt hiểm tươi",
        "quantity": 3.8,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-075-07",
        "recipeId": "rec-075",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 7
      },
      {
        "id": "ing-075-08",
        "recipeId": "rec-075",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.0,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 8
      },
      {
        "id": "ing-075-09",
        "recipeId": "rec-075",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 53.4,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 9
      },
      {
        "id": "ing-075-10",
        "recipeId": "rec-075",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-075-01",
        "recipeId": "rec-075",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-075-02",
        "recipeId": "rec-075",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-075-03",
        "recipeId": "rec-075",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-075-04",
        "recipeId": "rec-075",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-075-05",
        "recipeId": "rec-075",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-075-06",
        "recipeId": "rec-075",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-075-01",
        "recipeId": "rec-075",
        "originalUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
        "altText": "Tôm Sú Hấp Bia Sả Tươi Thơm Lừng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-076",
    "title": "Bánh Xèo Miền Tây Tôm Nhảy Thịt Ba Rọi",
    "slug": "banh-xeo-mien-tay-tom-nhay-thit-ba-roi-76",
    "description": "Vỏ bánh xèo giòn rụm vàng ruộm vành mỏng cuốn xà lách cải bẹ xanh chấm nước mắm tỏi ớt chua ngọt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 45,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-016",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-26T10:00:00Z",
    "viewCount": 2688,
    "ratingAverage": 4.5,
    "ratingCount": 244,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 553,
      "protein": 30.6,
      "carbohydrates": 39.6,
      "fat": 27.8,
      "fiber": 4.4,
      "sodium": 594.1
    },
    "ingredients": [
      {
        "id": "ing-076-01",
        "recipeId": "rec-076",
        "name": "Lá chanh non",
        "quantity": 9.8,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 1
      },
      {
        "id": "ing-076-02",
        "recipeId": "rec-076",
        "name": "Cà rốt Đà Lạt",
        "quantity": 0.9,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 2
      },
      {
        "id": "ing-076-03",
        "recipeId": "rec-076",
        "name": "Su hào tươi",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 3
      },
      {
        "id": "ing-076-04",
        "recipeId": "rec-076",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.2,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-076-05",
        "recipeId": "rec-076",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 1.9,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 5
      },
      {
        "id": "ing-076-06",
        "recipeId": "rec-076",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.0,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 6
      },
      {
        "id": "ing-076-07",
        "recipeId": "rec-076",
        "name": "Thảo quả khô",
        "quantity": 2.2,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 7
      },
      {
        "id": "ing-076-08",
        "recipeId": "rec-076",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 283.3,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 8
      },
      {
        "id": "ing-076-09",
        "recipeId": "rec-076",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 9
      },
      {
        "id": "ing-076-10",
        "recipeId": "rec-076",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 3.9,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-076-01",
        "recipeId": "rec-076",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-076-02",
        "recipeId": "rec-076",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-076-03",
        "recipeId": "rec-076",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-076-04",
        "recipeId": "rec-076",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-076-05",
        "recipeId": "rec-076",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-076-01",
        "recipeId": "rec-076",
        "originalUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Xèo Miền Tây Tôm Nhảy Thịt Ba Rọi",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-077",
    "title": "Bánh Khọt Vũng Tàu Tôm Tươi Mỡ Hành",
    "slug": "banh-khot-vung-tau-tom-tuoi-mo-hanh-77",
    "description": "Từng chiếc bánh khọt nhỏ xinh giòn tan đáy chảo, nhân tôm tươi rắc bột tôm cháy và mỡ hành xanh bóng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 90,
    "servings": 6,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-016",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-17T10:00:00Z",
    "viewCount": 3314,
    "ratingAverage": 4.96,
    "ratingCount": 186,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 469,
      "protein": 28.2,
      "carbohydrates": 64.0,
      "fat": 8.6,
      "fiber": 6.4,
      "sodium": 694.5
    },
    "ingredients": [
      {
        "id": "ing-077-01",
        "recipeId": "rec-077",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 54.0,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 1
      },
      {
        "id": "ing-077-02",
        "recipeId": "rec-077",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 53.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 2
      },
      {
        "id": "ing-077-03",
        "recipeId": "rec-077",
        "name": "Trứng gà ta tươi",
        "quantity": 3.2,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 3
      },
      {
        "id": "ing-077-04",
        "recipeId": "rec-077",
        "name": "Hành hoa & ngò rí",
        "quantity": 162.8,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 4
      },
      {
        "id": "ing-077-05",
        "recipeId": "rec-077",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 5
      },
      {
        "id": "ing-077-06",
        "recipeId": "rec-077",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 6
      },
      {
        "id": "ing-077-07",
        "recipeId": "rec-077",
        "name": "Hạt sen Huế tươi",
        "quantity": 175.5,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 7
      },
      {
        "id": "ing-077-08",
        "recipeId": "rec-077",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 8
      },
      {
        "id": "ing-077-09",
        "recipeId": "rec-077",
        "name": "Mè trắng rang thơm",
        "quantity": 27.8,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 9
      },
      {
        "id": "ing-077-10",
        "recipeId": "rec-077",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 10
      },
      {
        "id": "ing-077-11",
        "recipeId": "rec-077",
        "name": "Lạc rang đập dập",
        "quantity": 77.7,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 11
      },
      {
        "id": "ing-077-12",
        "recipeId": "rec-077",
        "name": "Giá đỗ tươi sạch",
        "quantity": 199.9,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-077-01",
        "recipeId": "rec-077",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-077-02",
        "recipeId": "rec-077",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-077-03",
        "recipeId": "rec-077",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-077-04",
        "recipeId": "rec-077",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-077-05",
        "recipeId": "rec-077",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-077-06",
        "recipeId": "rec-077",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-077-07",
        "recipeId": "rec-077",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-077-01",
        "recipeId": "rec-077",
        "originalUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Khọt Vũng Tàu Tôm Tươi Mỡ Hành",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-078",
    "title": "Bánh Cuốn Nóng Thịt Băm Mộc Nhĩ Chả Quế",
    "slug": "banh-cuon-nong-thit-bam-moc-nhi-cha-que-78",
    "description": "Lớp bánh tráng mỏng tang ướt mềm nhân thịt băm mộc nhĩ chấm nước mắm ấm thơm tinh dầu cà cuống.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 30,
    "servings": 4,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-016",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 2212,
    "ratingAverage": 4.79,
    "ratingCount": 270,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 596,
      "protein": 39.3,
      "carbohydrates": 29.8,
      "fat": 11.3,
      "fiber": 3.7,
      "sodium": 963.7
    },
    "ingredients": [
      {
        "id": "ing-078-01",
        "recipeId": "rec-078",
        "name": "Nấm hương khô thơm",
        "quantity": 58.6,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 1
      },
      {
        "id": "ing-078-02",
        "recipeId": "rec-078",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.5,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 2
      },
      {
        "id": "ing-078-03",
        "recipeId": "rec-078",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 3
      },
      {
        "id": "ing-078-04",
        "recipeId": "rec-078",
        "name": "Rau húng quế & ngò gai",
        "quantity": 216.7,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 4
      },
      {
        "id": "ing-078-05",
        "recipeId": "rec-078",
        "name": "Thịt nạc vai heo băm",
        "quantity": 342.8,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 5
      },
      {
        "id": "ing-078-06",
        "recipeId": "rec-078",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 6
      },
      {
        "id": "ing-078-07",
        "recipeId": "rec-078",
        "name": "Rau răm tươi",
        "quantity": 54.5,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 7
      },
      {
        "id": "ing-078-08",
        "recipeId": "rec-078",
        "name": "Hoa hồi khô",
        "quantity": 5.5,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 8
      },
      {
        "id": "ing-078-09",
        "recipeId": "rec-078",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 9
      },
      {
        "id": "ing-078-10",
        "recipeId": "rec-078",
        "name": "Gừng già tươi",
        "quantity": 90.2,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 10
      },
      {
        "id": "ing-078-11",
        "recipeId": "rec-078",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 11
      },
      {
        "id": "ing-078-12",
        "recipeId": "rec-078",
        "name": "Mè trắng rang thơm",
        "quantity": 32.4,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 12
      },
      {
        "id": "ing-078-13",
        "recipeId": "rec-078",
        "name": "Thịt tôm sú tươi",
        "quantity": 359.4,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-078-01",
        "recipeId": "rec-078",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-078-02",
        "recipeId": "rec-078",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-078-03",
        "recipeId": "rec-078",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-078-04",
        "recipeId": "rec-078",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-078-05",
        "recipeId": "rec-078",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-078-06",
        "recipeId": "rec-078",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-078-01",
        "recipeId": "rec-078",
        "originalUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Cuốn Nóng Thịt Băm Mộc Nhĩ Chả Quế",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-079",
    "title": "Bánh Bèo Chén Miền Trung Tôm Cháy Da Heo",
    "slug": "banh-beo-chen-mien-trung-tom-chay-da-heo-79",
    "description": "Từng chén bánh bèo mềm mướt phủ bột tôm cháy đỏ hồng, tóp mỡ giòn rụm và thìa nước mắm ớt cay xé.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 90,
    "servings": 4,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-016",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-09T10:00:00Z",
    "viewCount": 17512,
    "ratingAverage": 4.59,
    "ratingCount": 309,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 417,
      "protein": 31.7,
      "carbohydrates": 49.7,
      "fat": 21.8,
      "fiber": 3.7,
      "sodium": 777.7
    },
    "ingredients": [
      {
        "id": "ing-079-01",
        "recipeId": "rec-079",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 1
      },
      {
        "id": "ing-079-02",
        "recipeId": "rec-079",
        "name": "Nấm hương khô thơm",
        "quantity": 51.0,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 2
      },
      {
        "id": "ing-079-03",
        "recipeId": "rec-079",
        "name": "Hạt sen Huế tươi",
        "quantity": 145.1,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 3
      },
      {
        "id": "ing-079-04",
        "recipeId": "rec-079",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 2.3,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 4
      },
      {
        "id": "ing-079-05",
        "recipeId": "rec-079",
        "name": "Ớt hiểm tươi",
        "quantity": 3.8,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 5
      },
      {
        "id": "ing-079-06",
        "recipeId": "rec-079",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 3.7,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 6
      },
      {
        "id": "ing-079-07",
        "recipeId": "rec-079",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 1.9,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 7
      },
      {
        "id": "ing-079-08",
        "recipeId": "rec-079",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.2,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 8
      },
      {
        "id": "ing-079-09",
        "recipeId": "rec-079",
        "name": "Thịt nạc vai heo băm",
        "quantity": 359.3,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 9
      },
      {
        "id": "ing-079-10",
        "recipeId": "rec-079",
        "name": "Dầu thực vật cao cấp",
        "quantity": 56.9,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-079-01",
        "recipeId": "rec-079",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-079-02",
        "recipeId": "rec-079",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-079-03",
        "recipeId": "rec-079",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-079-04",
        "recipeId": "rec-079",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-079-05",
        "recipeId": "rec-079",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-079-06",
        "recipeId": "rec-079",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-079-01",
        "recipeId": "rec-079",
        "originalUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Bèo Chén Miền Trung Tôm Cháy Da Heo",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-080",
    "title": "Bánh Bột Lọc Huế Tôm Thịt Trong Suốt",
    "slug": "banh-bot-loc-hue-tom-thit-trong-suot-80",
    "description": "Lớp vỏ bột năng dai trong vắt lộ rõ con tôm rim mặn ngọt và miếng thịt mỡ trong veo gói lá chuối thơm.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 60,
    "servings": 2,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-016",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-12T10:00:00Z",
    "viewCount": 1763,
    "ratingAverage": 4.89,
    "ratingCount": 419,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 598,
      "protein": 51.5,
      "carbohydrates": 69.7,
      "fat": 32.2,
      "fiber": 5.5,
      "sodium": 1066.8
    },
    "ingredients": [
      {
        "id": "ing-080-01",
        "recipeId": "rec-080",
        "name": "Dưa leo tươi giòn",
        "quantity": 2.1,
        "unit": "trái",
        "notes": "Gọt vỏ thái lát dài",
        "orderIndex": 1
      },
      {
        "id": "ing-080-02",
        "recipeId": "rec-080",
        "name": "Tỏi khô cô đơn",
        "quantity": 5.6,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 2
      },
      {
        "id": "ing-080-03",
        "recipeId": "rec-080",
        "name": "Sả cây tươi thơm",
        "quantity": 6.5,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 3
      },
      {
        "id": "ing-080-04",
        "recipeId": "rec-080",
        "name": "Hạt sen Huế tươi",
        "quantity": 173.3,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 4
      },
      {
        "id": "ing-080-05",
        "recipeId": "rec-080",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 5
      },
      {
        "id": "ing-080-06",
        "recipeId": "rec-080",
        "name": "Ớt hiểm tươi",
        "quantity": 4.7,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-080-07",
        "recipeId": "rec-080",
        "name": "Bột năng tinh chế",
        "quantity": 100.3,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 7
      },
      {
        "id": "ing-080-08",
        "recipeId": "rec-080",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.2,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 8
      },
      {
        "id": "ing-080-09",
        "recipeId": "rec-080",
        "name": "Hoa hồi khô",
        "quantity": 4.8,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 9
      },
      {
        "id": "ing-080-10",
        "recipeId": "rec-080",
        "name": "Thịt tôm sú tươi",
        "quantity": 384.3,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 10
      },
      {
        "id": "ing-080-11",
        "recipeId": "rec-080",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.5,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 11
      },
      {
        "id": "ing-080-12",
        "recipeId": "rec-080",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.1,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-080-01",
        "recipeId": "rec-080",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-080-02",
        "recipeId": "rec-080",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-080-03",
        "recipeId": "rec-080",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-080-04",
        "recipeId": "rec-080",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-080-05",
        "recipeId": "rec-080",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-080-06",
        "recipeId": "rec-080",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-080-01",
        "recipeId": "rec-080",
        "originalUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Bột Lọc Huế Tôm Thịt Trong Suốt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-081",
    "title": "Đậu Hũ Tứ Xuyên Cay Tê Lưỡi",
    "slug": "dau-hu-tu-xuyen-cay-te-luoi-81",
    "description": "Đậu hũ non mềm mịn nấu cùng thịt băm trong sốt tương cay Tứ Xuyên và hạt tiêu Tứ Xuyên tê tái nồng nàn.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 40,
    "servings": 8,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-017",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-21T10:00:00Z",
    "viewCount": 14673,
    "ratingAverage": 4.87,
    "ratingCount": 86,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 499,
      "protein": 33.1,
      "carbohydrates": 38.6,
      "fat": 12.5,
      "fiber": 6.4,
      "sodium": 976.3
    },
    "ingredients": [
      {
        "id": "ing-081-01",
        "recipeId": "rec-081",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.2,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 1
      },
      {
        "id": "ing-081-02",
        "recipeId": "rec-081",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 1.8,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 2
      },
      {
        "id": "ing-081-03",
        "recipeId": "rec-081",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.8,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 3
      },
      {
        "id": "ing-081-04",
        "recipeId": "rec-081",
        "name": "Ớt hiểm tươi",
        "quantity": 4.1,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-081-05",
        "recipeId": "rec-081",
        "name": "Bột năng tinh chế",
        "quantity": 90.9,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 5
      },
      {
        "id": "ing-081-06",
        "recipeId": "rec-081",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 6
      },
      {
        "id": "ing-081-07",
        "recipeId": "rec-081",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 2.8,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 7
      },
      {
        "id": "ing-081-08",
        "recipeId": "rec-081",
        "name": "Hạt sen Huế tươi",
        "quantity": 155.8,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 8
      },
      {
        "id": "ing-081-09",
        "recipeId": "rec-081",
        "name": "Rau xà lách mỡ",
        "quantity": 359.3,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 9
      },
      {
        "id": "ing-081-10",
        "recipeId": "rec-081",
        "name": "Giá đỗ tươi sạch",
        "quantity": 224.6,
        "unit": "g",
        "notes": "Rửa sạch ngắt bớt rễ",
        "orderIndex": 10
      },
      {
        "id": "ing-081-11",
        "recipeId": "rec-081",
        "name": "Đậu xanh xát vỏ",
        "quantity": 231.8,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 11
      },
      {
        "id": "ing-081-12",
        "recipeId": "rec-081",
        "name": "Mè trắng rang thơm",
        "quantity": 27.8,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-081-01",
        "recipeId": "rec-081",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-081-02",
        "recipeId": "rec-081",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-081-03",
        "recipeId": "rec-081",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-081-04",
        "recipeId": "rec-081",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-081-05",
        "recipeId": "rec-081",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-081-01",
        "recipeId": "rec-081",
        "originalUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "altText": "Đậu Hũ Tứ Xuyên Cay Tê Lưỡi",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-082",
    "title": "Trứng Cuộn Tam Sắc Kiểu Nhật Mềm Mịn",
    "slug": "trung-cuon-tam-sac-kieu-nhat-mem-min-82",
    "description": "Các lớp trứng gà tươi đánh bông cuộn đều tay cùng thanh cua, rong biển và cà rốt xắt hạt lựu mềm ngọt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 60,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-017",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-18T10:00:00Z",
    "viewCount": 11689,
    "ratingAverage": 4.88,
    "ratingCount": 171,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 573,
      "protein": 45.4,
      "carbohydrates": 61.4,
      "fat": 29.5,
      "fiber": 3.9,
      "sodium": 1050.2
    },
    "ingredients": [
      {
        "id": "ing-082-01",
        "recipeId": "rec-082",
        "name": "Miến dong làng So",
        "quantity": 106.8,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 1
      },
      {
        "id": "ing-082-02",
        "recipeId": "rec-082",
        "name": "Thịt nạc vai heo băm",
        "quantity": 306.0,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 2
      },
      {
        "id": "ing-082-03",
        "recipeId": "rec-082",
        "name": "Lạc rang đập dập",
        "quantity": 92.9,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 3
      },
      {
        "id": "ing-082-04",
        "recipeId": "rec-082",
        "name": "Mè trắng rang thơm",
        "quantity": 30.1,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 4
      },
      {
        "id": "ing-082-05",
        "recipeId": "rec-082",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 5
      },
      {
        "id": "ing-082-06",
        "recipeId": "rec-082",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.4,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 6
      },
      {
        "id": "ing-082-07",
        "recipeId": "rec-082",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.5,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 7
      },
      {
        "id": "ing-082-08",
        "recipeId": "rec-082",
        "name": "Bột năng tinh chế",
        "quantity": 105.3,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 8
      },
      {
        "id": "ing-082-09",
        "recipeId": "rec-082",
        "name": "Hoa hồi khô",
        "quantity": 5.6,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 9
      },
      {
        "id": "ing-082-10",
        "recipeId": "rec-082",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.1,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 10
      },
      {
        "id": "ing-082-11",
        "recipeId": "rec-082",
        "name": "Thịt thăn bò tươi",
        "quantity": 489.4,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 11
      },
      {
        "id": "ing-082-12",
        "recipeId": "rec-082",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.0,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 12
      },
      {
        "id": "ing-082-13",
        "recipeId": "rec-082",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 1.9,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-082-01",
        "recipeId": "rec-082",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-082-02",
        "recipeId": "rec-082",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-082-03",
        "recipeId": "rec-082",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-082-04",
        "recipeId": "rec-082",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-082-05",
        "recipeId": "rec-082",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-082-06",
        "recipeId": "rec-082",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-082-07",
        "recipeId": "rec-082",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-082-01",
        "recipeId": "rec-082",
        "originalUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "altText": "Trứng Cuộn Tam Sắc Kiểu Nhật Mềm Mịn",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-083",
    "title": "Đậu Hũ Nhồi Thịt Sốt Cà Chua Đậm Đà",
    "slug": "dau-hu-nhoi-thit-sot-ca-chua-dam-da-83",
    "description": "Miếng đậu hũ chiên vàng nhồi giò sống thịt băm rim trong sốt cà chua tươi sánh mịn thơm mùi hành hoa.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 45,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-017",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-19T10:00:00Z",
    "viewCount": 18070,
    "ratingAverage": 4.63,
    "ratingCount": 201,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 577,
      "protein": 32.5,
      "carbohydrates": 53.6,
      "fat": 28.0,
      "fiber": 5.6,
      "sodium": 787.7
    },
    "ingredients": [
      {
        "id": "ing-083-01",
        "recipeId": "rec-083",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.1,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 1
      },
      {
        "id": "ing-083-02",
        "recipeId": "rec-083",
        "name": "Hành hoa & ngò rí",
        "quantity": 163.4,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 2
      },
      {
        "id": "ing-083-03",
        "recipeId": "rec-083",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.5,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 3
      },
      {
        "id": "ing-083-04",
        "recipeId": "rec-083",
        "name": "Thịt thăn bò tươi",
        "quantity": 480.4,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 4
      },
      {
        "id": "ing-083-05",
        "recipeId": "rec-083",
        "name": "Hạt sen Huế tươi",
        "quantity": 138.0,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 5
      },
      {
        "id": "ing-083-06",
        "recipeId": "rec-083",
        "name": "Đường phèn kết tinh",
        "quantity": 29.9,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 6
      },
      {
        "id": "ing-083-07",
        "recipeId": "rec-083",
        "name": "Dấm gạo nếp thơm",
        "quantity": 51.0,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 7
      },
      {
        "id": "ing-083-08",
        "recipeId": "rec-083",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-083-09",
        "recipeId": "rec-083",
        "name": "Nấm hương khô thơm",
        "quantity": 47.5,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 9
      },
      {
        "id": "ing-083-10",
        "recipeId": "rec-083",
        "name": "Chanh tươi mọng nước",
        "quantity": 1.8,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 10
      },
      {
        "id": "ing-083-11",
        "recipeId": "rec-083",
        "name": "Thịt tôm sú tươi",
        "quantity": 413.0,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 11
      },
      {
        "id": "ing-083-12",
        "recipeId": "rec-083",
        "name": "Rau răm tươi",
        "quantity": 47.8,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-083-01",
        "recipeId": "rec-083",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-083-02",
        "recipeId": "rec-083",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-083-03",
        "recipeId": "rec-083",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-083-04",
        "recipeId": "rec-083",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-083-05",
        "recipeId": "rec-083",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-083-06",
        "recipeId": "rec-083",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-083-01",
        "recipeId": "rec-083",
        "originalUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "altText": "Đậu Hũ Nhồi Thịt Sốt Cà Chua Đậm Đà",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-084",
    "title": "Trứng Bác Cà Chua Cơm Nhà Bình Dị",
    "slug": "trung-bac-ca-chua-com-nha-binh-di-84",
    "description": "Món ăn quốc dân mềm xốp béo ngậy vị trứng quyện trọn vị chua ngọt tự nhiên của cà chua chín mọng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 30,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-017",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-28T10:00:00Z",
    "viewCount": 4647,
    "ratingAverage": 4.83,
    "ratingCount": 67,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 737,
      "protein": 21.0,
      "carbohydrates": 27.0,
      "fat": 11.7,
      "fiber": 2.4,
      "sodium": 773.1
    },
    "ingredients": [
      {
        "id": "ing-084-01",
        "recipeId": "rec-084",
        "name": "Thịt tôm sú tươi",
        "quantity": 329.8,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 1
      },
      {
        "id": "ing-084-02",
        "recipeId": "rec-084",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 2
      },
      {
        "id": "ing-084-03",
        "recipeId": "rec-084",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.2,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 3
      },
      {
        "id": "ing-084-04",
        "recipeId": "rec-084",
        "name": "Rau răm tươi",
        "quantity": 47.4,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 4
      },
      {
        "id": "ing-084-05",
        "recipeId": "rec-084",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.5,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 5
      },
      {
        "id": "ing-084-06",
        "recipeId": "rec-084",
        "name": "Thịt thăn bò tươi",
        "quantity": 518.5,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 6
      },
      {
        "id": "ing-084-07",
        "recipeId": "rec-084",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 294.8,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 7
      },
      {
        "id": "ing-084-08",
        "recipeId": "rec-084",
        "name": "Thảo quả khô",
        "quantity": 2.3,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-084-09",
        "recipeId": "rec-084",
        "name": "Thịt nạc vai heo băm",
        "quantity": 273.3,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 9
      },
      {
        "id": "ing-084-10",
        "recipeId": "rec-084",
        "name": "Hạt sen Huế tươi",
        "quantity": 137.4,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-084-01",
        "recipeId": "rec-084",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-084-02",
        "recipeId": "rec-084",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-084-03",
        "recipeId": "rec-084",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-084-04",
        "recipeId": "rec-084",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-084-05",
        "recipeId": "rec-084",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-084-01",
        "recipeId": "rec-084",
        "originalUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "altText": "Trứng Bác Cà Chua Cơm Nhà Bình Dị",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-085",
    "title": "Đậu Hũ Lướt Ván Chấm Mắm Tôm Tía Tô",
    "slug": "dau-hu-luot-van-cham-mam-tom-tia-to-85",
    "description": "Miếng đậu hũ mềm ngoài giòn trong béo ngậy chấm bát mắm tôm đánh bông sủi bọt ớt chanh chuẩn vị.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 20,
    "servings": 6,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-017",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-15T10:00:00Z",
    "viewCount": 18093,
    "ratingAverage": 4.93,
    "ratingCount": 398,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 343,
      "protein": 30.4,
      "carbohydrates": 41.6,
      "fat": 32.2,
      "fiber": 8.1,
      "sodium": 933.3
    },
    "ingredients": [
      {
        "id": "ing-085-01",
        "recipeId": "rec-085",
        "name": "Thịt nạc vai heo băm",
        "quantity": 332.2,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 1
      },
      {
        "id": "ing-085-02",
        "recipeId": "rec-085",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.1,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 2
      },
      {
        "id": "ing-085-03",
        "recipeId": "rec-085",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 3
      },
      {
        "id": "ing-085-04",
        "recipeId": "rec-085",
        "name": "Mè trắng rang thơm",
        "quantity": 28.7,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 4
      },
      {
        "id": "ing-085-05",
        "recipeId": "rec-085",
        "name": "Lạc rang đập dập",
        "quantity": 75.5,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 5
      },
      {
        "id": "ing-085-06",
        "recipeId": "rec-085",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.8,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 6
      },
      {
        "id": "ing-085-07",
        "recipeId": "rec-085",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 1.8,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 7
      },
      {
        "id": "ing-085-08",
        "recipeId": "rec-085",
        "name": "Sả cây tươi thơm",
        "quantity": 5.8,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 8
      },
      {
        "id": "ing-085-09",
        "recipeId": "rec-085",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 50.5,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 9
      },
      {
        "id": "ing-085-10",
        "recipeId": "rec-085",
        "name": "Hành tây củ lớn",
        "quantity": 2.4,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-085-11",
        "recipeId": "rec-085",
        "name": "Thịt thăn bò tươi",
        "quantity": 491.0,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-085-01",
        "recipeId": "rec-085",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-085-02",
        "recipeId": "rec-085",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-085-03",
        "recipeId": "rec-085",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-085-04",
        "recipeId": "rec-085",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-085-05",
        "recipeId": "rec-085",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-085-06",
        "recipeId": "rec-085",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-085-07",
        "recipeId": "rec-085",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-085-01",
        "recipeId": "rec-085",
        "originalUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        "altText": "Đậu Hũ Lướt Ván Chấm Mắm Tôm Tía Tô",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-086",
    "title": "Bún Mắm Nêm Thịt Luộc Heo Quay Xứ Huế",
    "slug": "bun-mam-nem-thit-luoc-heo-quay-xu-hue-86",
    "description": "Bát bún đậm đà mắm nêm cá cơm nguyên chất, thịt heo quay da giòn và rau sống thơm ngát.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 60,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-018",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-06T10:00:00Z",
    "viewCount": 16532,
    "ratingAverage": 4.46,
    "ratingCount": 147,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 750,
      "protein": 37.5,
      "carbohydrates": 79.2,
      "fat": 25.9,
      "fiber": 3.4,
      "sodium": 1076.6
    },
    "ingredients": [
      {
        "id": "ing-086-01",
        "recipeId": "rec-086",
        "name": "Miến dong làng So",
        "quantity": 103.0,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 1
      },
      {
        "id": "ing-086-02",
        "recipeId": "rec-086",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 0.9,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 2
      },
      {
        "id": "ing-086-03",
        "recipeId": "rec-086",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.3,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 3
      },
      {
        "id": "ing-086-04",
        "recipeId": "rec-086",
        "name": "Mộc nhĩ đen khô",
        "quantity": 41.5,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-086-05",
        "recipeId": "rec-086",
        "name": "Gừng già tươi",
        "quantity": 106.7,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 5
      },
      {
        "id": "ing-086-06",
        "recipeId": "rec-086",
        "name": "Lạc rang đập dập",
        "quantity": 90.7,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 6
      },
      {
        "id": "ing-086-07",
        "recipeId": "rec-086",
        "name": "Bột năng tinh chế",
        "quantity": 104.0,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 7
      },
      {
        "id": "ing-086-08",
        "recipeId": "rec-086",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.0,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 8
      },
      {
        "id": "ing-086-09",
        "recipeId": "rec-086",
        "name": "Sả cây tươi thơm",
        "quantity": 6.9,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 9
      },
      {
        "id": "ing-086-10",
        "recipeId": "rec-086",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 10
      },
      {
        "id": "ing-086-11",
        "recipeId": "rec-086",
        "name": "Trứng gà ta tươi",
        "quantity": 3.6,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 11
      },
      {
        "id": "ing-086-12",
        "recipeId": "rec-086",
        "name": "Rau xà lách mỡ",
        "quantity": 323.4,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-086-01",
        "recipeId": "rec-086",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-086-02",
        "recipeId": "rec-086",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-086-03",
        "recipeId": "rec-086",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-086-04",
        "recipeId": "rec-086",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-086-05",
        "recipeId": "rec-086",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-086-06",
        "recipeId": "rec-086",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-086-07",
        "recipeId": "rec-086",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-086-01",
        "recipeId": "rec-086",
        "originalUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "altText": "Bún Mắm Nêm Thịt Luộc Heo Quay Xứ Huế",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-087",
    "title": "Bánh Canh Cua Giò Heo Nước Dùng Bánh Canh Sánh Sệt",
    "slug": "banh-canh-cua-gio-heo-nuoc-dung-banh-canh-sanh-set-87",
    "description": "Sợi bánh canh bột lọc dai dẻo ngập trong nước dùng súp cua đỏ au gạch, thịt cua bóc nõn và chả cua thơm bùi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 20,
    "cookTime": 20,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-018",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-05T10:00:00Z",
    "viewCount": 5302,
    "ratingAverage": 4.41,
    "ratingCount": 63,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 543,
      "protein": 27.9,
      "carbohydrates": 46.4,
      "fat": 15.0,
      "fiber": 2.2,
      "sodium": 664.4
    },
    "ingredients": [
      {
        "id": "ing-087-01",
        "recipeId": "rec-087",
        "name": "Hành tây củ lớn",
        "quantity": 1.8,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-087-02",
        "recipeId": "rec-087",
        "name": "Thịt thăn bò tươi",
        "quantity": 474.4,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 2
      },
      {
        "id": "ing-087-03",
        "recipeId": "rec-087",
        "name": "Hạt sen Huế tươi",
        "quantity": 151.4,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 3
      },
      {
        "id": "ing-087-04",
        "recipeId": "rec-087",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.4,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 4
      },
      {
        "id": "ing-087-05",
        "recipeId": "rec-087",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 5
      },
      {
        "id": "ing-087-06",
        "recipeId": "rec-087",
        "name": "Dầu thực vật cao cấp",
        "quantity": 56.8,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 6
      },
      {
        "id": "ing-087-07",
        "recipeId": "rec-087",
        "name": "Rau xà lách mỡ",
        "quantity": 301.4,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 7
      },
      {
        "id": "ing-087-08",
        "recipeId": "rec-087",
        "name": "Thịt tôm sú tươi",
        "quantity": 366.6,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 8
      },
      {
        "id": "ing-087-09",
        "recipeId": "rec-087",
        "name": "Rau răm tươi",
        "quantity": 58.8,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 9
      },
      {
        "id": "ing-087-10",
        "recipeId": "rec-087",
        "name": "Trứng gà ta tươi",
        "quantity": 3.2,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 10
      },
      {
        "id": "ing-087-11",
        "recipeId": "rec-087",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.2,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-087-01",
        "recipeId": "rec-087",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-087-02",
        "recipeId": "rec-087",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-087-03",
        "recipeId": "rec-087",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-087-04",
        "recipeId": "rec-087",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-087-05",
        "recipeId": "rec-087",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-087-06",
        "recipeId": "rec-087",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-087-07",
        "recipeId": "rec-087",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-087-01",
        "recipeId": "rec-087",
        "originalUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Canh Cua Giò Heo Nước Dùng Bánh Canh Sánh Sệt",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-088",
    "title": "Cơm Hến Sông Hương Cay Nồng Đậm Vị",
    "slug": "com-hen-song-huong-cay-nong-dam-vi-88",
    "description": "Cơm nguội trộn thịt hến xào, tóp mỡ giòn, da heo chiên, mè rang và thìa mắm ruốc Huế thơm lừng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 40,
    "servings": 6,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-018",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-22T10:00:00Z",
    "viewCount": 7834,
    "ratingAverage": 4.79,
    "ratingCount": 104,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 733,
      "protein": 21.5,
      "carbohydrates": 52.1,
      "fat": 19.1,
      "fiber": 2.9,
      "sodium": 1021.5
    },
    "ingredients": [
      {
        "id": "ing-088-01",
        "recipeId": "rec-088",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 53.4,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 1
      },
      {
        "id": "ing-088-02",
        "recipeId": "rec-088",
        "name": "Ớt hiểm tươi",
        "quantity": 4.0,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 2
      },
      {
        "id": "ing-088-03",
        "recipeId": "rec-088",
        "name": "Đậu xanh xát vỏ",
        "quantity": 185.6,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 3
      },
      {
        "id": "ing-088-04",
        "recipeId": "rec-088",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.3,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 4
      },
      {
        "id": "ing-088-05",
        "recipeId": "rec-088",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 3.9,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 5
      },
      {
        "id": "ing-088-06",
        "recipeId": "rec-088",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-088-07",
        "recipeId": "rec-088",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 0.9,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 7
      },
      {
        "id": "ing-088-08",
        "recipeId": "rec-088",
        "name": "Trứng gà ta tươi",
        "quantity": 3.5,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 8
      },
      {
        "id": "ing-088-09",
        "recipeId": "rec-088",
        "name": "Hành tây củ lớn",
        "quantity": 1.9,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-088-10",
        "recipeId": "rec-088",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.7,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 10
      },
      {
        "id": "ing-088-11",
        "recipeId": "rec-088",
        "name": "Miến dong làng So",
        "quantity": 120.0,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 11
      },
      {
        "id": "ing-088-12",
        "recipeId": "rec-088",
        "name": "Tỏi khô cô đơn",
        "quantity": 6.4,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 12
      },
      {
        "id": "ing-088-13",
        "recipeId": "rec-088",
        "name": "Nước hầm xương heo trong",
        "quantity": 1.8,
        "unit": "lít",
        "notes": "Lọc qua rây mịn",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-088-01",
        "recipeId": "rec-088",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-088-02",
        "recipeId": "rec-088",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-088-03",
        "recipeId": "rec-088",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-088-04",
        "recipeId": "rec-088",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-088-05",
        "recipeId": "rec-088",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-088-06",
        "recipeId": "rec-088",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-088-01",
        "recipeId": "rec-088",
        "originalUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "altText": "Cơm Hến Sông Hương Cay Nồng Đậm Vị",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-089",
    "title": "Nem Lụi Nướng Sả Chấm Nước Lèo Đậu Phộng",
    "slug": "nem-lui-nuong-sa-cham-nuoc-leo-dau-phong-89",
    "description": "Thịt nem quết dẻo cuốn cây sả nướng than hoa thơm nức chấm nước sốt lèo gan heo đậu phộng béo bùi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 60,
    "servings": 2,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-018",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-01T10:00:00Z",
    "viewCount": 2013,
    "ratingAverage": 4.47,
    "ratingCount": 27,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 575,
      "protein": 22.9,
      "carbohydrates": 60.7,
      "fat": 18.8,
      "fiber": 6.4,
      "sodium": 601.0
    },
    "ingredients": [
      {
        "id": "ing-089-01",
        "recipeId": "rec-089",
        "name": "Hành tây củ lớn",
        "quantity": 2.1,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-089-02",
        "recipeId": "rec-089",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.2,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 2
      },
      {
        "id": "ing-089-03",
        "recipeId": "rec-089",
        "name": "Dầu thực vật cao cấp",
        "quantity": 56.1,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 3
      },
      {
        "id": "ing-089-04",
        "recipeId": "rec-089",
        "name": "Quế thanh khô",
        "quantity": 2.4,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 4
      },
      {
        "id": "ing-089-05",
        "recipeId": "rec-089",
        "name": "Thịt nạc vai heo băm",
        "quantity": 318.7,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 5
      },
      {
        "id": "ing-089-06",
        "recipeId": "rec-089",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.0,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 6
      },
      {
        "id": "ing-089-07",
        "recipeId": "rec-089",
        "name": "Hành hoa & ngò rí",
        "quantity": 175.6,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 7
      },
      {
        "id": "ing-089-08",
        "recipeId": "rec-089",
        "name": "Lá dứa nếp thơm",
        "quantity": 4.7,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 8
      },
      {
        "id": "ing-089-09",
        "recipeId": "rec-089",
        "name": "Dấm gạo nếp thơm",
        "quantity": 53.4,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 9
      },
      {
        "id": "ing-089-10",
        "recipeId": "rec-089",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.1,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 10
      },
      {
        "id": "ing-089-11",
        "recipeId": "rec-089",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.0,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 11
      },
      {
        "id": "ing-089-12",
        "recipeId": "rec-089",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.6,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 12
      },
      {
        "id": "ing-089-13",
        "recipeId": "rec-089",
        "name": "Hoa hồi khô",
        "quantity": 4.6,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-089-01",
        "recipeId": "rec-089",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-089-02",
        "recipeId": "rec-089",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-089-03",
        "recipeId": "rec-089",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-089-04",
        "recipeId": "rec-089",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-089-05",
        "recipeId": "rec-089",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-089-06",
        "recipeId": "rec-089",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-089-07",
        "recipeId": "rec-089",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-089-01",
        "recipeId": "rec-089",
        "originalUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "altText": "Nem Lụi Nướng Sả Chấm Nước Lèo Đậu Phộng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-090",
    "title": "Bún Nghệ Xào Lòng Heo Xứ Huế Cay Nồng",
    "slug": "bun-nghe-xao-long-heo-xu-hue-cay-nong-90",
    "description": "Lòng heo làm sạch xào thơm cùng củ nghệ tươi giã nát, hẹ lá và ớt xiêm rừng ấm nồng màu vàng nghệ tươi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 90,
    "servings": 8,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-018",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-06T10:00:00Z",
    "viewCount": 16347,
    "ratingAverage": 4.43,
    "ratingCount": 415,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 574,
      "protein": 46.1,
      "carbohydrates": 60.9,
      "fat": 9.2,
      "fiber": 2.9,
      "sodium": 984.1
    },
    "ingredients": [
      {
        "id": "ing-090-01",
        "recipeId": "rec-090",
        "name": "Cà rốt Đà Lạt",
        "quantity": 1.2,
        "unit": "củ",
        "notes": "Bào sợi nhuyễn mỏng",
        "orderIndex": 1
      },
      {
        "id": "ing-090-02",
        "recipeId": "rec-090",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.1,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 2
      },
      {
        "id": "ing-090-03",
        "recipeId": "rec-090",
        "name": "Hành hoa & ngò rí",
        "quantity": 176.6,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 3
      },
      {
        "id": "ing-090-04",
        "recipeId": "rec-090",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 0.9,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 4
      },
      {
        "id": "ing-090-05",
        "recipeId": "rec-090",
        "name": "Hoa hồi khô",
        "quantity": 5.1,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 5
      },
      {
        "id": "ing-090-06",
        "recipeId": "rec-090",
        "name": "Miến dong làng So",
        "quantity": 98.2,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 6
      },
      {
        "id": "ing-090-07",
        "recipeId": "rec-090",
        "name": "Xương ống bò hầm nước dùng",
        "quantity": 1.8,
        "unit": "kg",
        "notes": "Chần sạch ninh 10 tiếng",
        "orderIndex": 7
      },
      {
        "id": "ing-090-08",
        "recipeId": "rec-090",
        "name": "Đậu xanh xát vỏ",
        "quantity": 223.1,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 8
      },
      {
        "id": "ing-090-09",
        "recipeId": "rec-090",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.0,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 9
      },
      {
        "id": "ing-090-10",
        "recipeId": "rec-090",
        "name": "Thịt thăn bò tươi",
        "quantity": 458.3,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-090-01",
        "recipeId": "rec-090",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-090-02",
        "recipeId": "rec-090",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-090-03",
        "recipeId": "rec-090",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-090-04",
        "recipeId": "rec-090",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-090-05",
        "recipeId": "rec-090",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-090-06",
        "recipeId": "rec-090",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-090-01",
        "recipeId": "rec-090",
        "originalUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        "altText": "Bún Nghệ Xào Lòng Heo Xứ Huế Cay Nồng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-091",
    "title": "Muối Ớt Xanh Nha Trang Sệt Kẹo Chấm Hải Sản",
    "slug": "muoi-ot-xanh-nha-trang-set-keo-cham-hai-san-91",
    "description": "Nước chấm thần thánh sánh mịn từ ớt xiêm xanh, sữa đặc, nước cốt chanh tươi và lá chanh thái sợi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 90,
    "servings": 2,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-019",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-19T10:00:00Z",
    "viewCount": 14816,
    "ratingAverage": 4.9,
    "ratingCount": 161,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 352,
      "protein": 33.6,
      "carbohydrates": 32.3,
      "fat": 17.3,
      "fiber": 6.9,
      "sodium": 900.4
    },
    "ingredients": [
      {
        "id": "ing-091-01",
        "recipeId": "rec-091",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-091-02",
        "recipeId": "rec-091",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.4,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 2
      },
      {
        "id": "ing-091-03",
        "recipeId": "rec-091",
        "name": "Đường phèn kết tinh",
        "quantity": 32.5,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 3
      },
      {
        "id": "ing-091-04",
        "recipeId": "rec-091",
        "name": "Hành hoa & ngò rí",
        "quantity": 168.3,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 4
      },
      {
        "id": "ing-091-05",
        "recipeId": "rec-091",
        "name": "Hoa hồi khô",
        "quantity": 5.0,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 5
      },
      {
        "id": "ing-091-06",
        "recipeId": "rec-091",
        "name": "Rau xà lách mỡ",
        "quantity": 306.0,
        "unit": "g",
        "notes": "Rửa sạch để ráo nước",
        "orderIndex": 6
      },
      {
        "id": "ing-091-07",
        "recipeId": "rec-091",
        "name": "Rau răm tươi",
        "quantity": 59.8,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 7
      },
      {
        "id": "ing-091-08",
        "recipeId": "rec-091",
        "name": "Mè trắng rang thơm",
        "quantity": 30.1,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 8
      },
      {
        "id": "ing-091-09",
        "recipeId": "rec-091",
        "name": "Dấm gạo nếp thơm",
        "quantity": 50.6,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 9
      },
      {
        "id": "ing-091-10",
        "recipeId": "rec-091",
        "name": "Lá dứa nếp thơm",
        "quantity": 6.0,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 10
      },
      {
        "id": "ing-091-11",
        "recipeId": "rec-091",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 239.3,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 11
      },
      {
        "id": "ing-091-12",
        "recipeId": "rec-091",
        "name": "Sả cây tươi thơm",
        "quantity": 6.1,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 12
      }
    ],
    "steps": [
      {
        "id": "step-091-01",
        "recipeId": "rec-091",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-091-02",
        "recipeId": "rec-091",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-091-03",
        "recipeId": "rec-091",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-091-04",
        "recipeId": "rec-091",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-091-05",
        "recipeId": "rec-091",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-091-06",
        "recipeId": "rec-091",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-091-07",
        "recipeId": "rec-091",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-091-01",
        "recipeId": "rec-091",
        "originalUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "altText": "Muối Ớt Xanh Nha Trang Sệt Kẹo Chấm Hải Sản",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-092",
    "title": "Sốt Nước Mắm Chua Ngọt Kẹo Tỏi Ớt Nổi",
    "slug": "sot-nuoc-mam-chua-ngot-keo-toi-ot-noi-92",
    "description": "Bí quyết pha nước mắm bất bại sánh kẹo như mật ong với tỏi ớt nổi đều tăm tắp thơm lừng.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 60,
    "servings": 2,
    "difficulty": 1,
    "status": 1,
    "categoryId": "cat-019",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-13T10:00:00Z",
    "viewCount": 5860,
    "ratingAverage": 4.97,
    "ratingCount": 311,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 563,
      "protein": 35.3,
      "carbohydrates": 57.3,
      "fat": 10.9,
      "fiber": 7.5,
      "sodium": 928.7
    },
    "ingredients": [
      {
        "id": "ing-092-01",
        "recipeId": "rec-092",
        "name": "Ớt sừng đỏ không cay",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Thái sợi trang trí",
        "orderIndex": 1
      },
      {
        "id": "ing-092-02",
        "recipeId": "rec-092",
        "name": "Hoa hồi khô",
        "quantity": 5.0,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 2
      },
      {
        "id": "ing-092-03",
        "recipeId": "rec-092",
        "name": "Hạt sen Huế tươi",
        "quantity": 142.1,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 3
      },
      {
        "id": "ing-092-04",
        "recipeId": "rec-092",
        "name": "Bột năng tinh chế",
        "quantity": 104.0,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 4
      },
      {
        "id": "ing-092-05",
        "recipeId": "rec-092",
        "name": "Miến dong làng So",
        "quantity": 100.0,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 5
      },
      {
        "id": "ing-092-06",
        "recipeId": "rec-092",
        "name": "Thảo quả khô",
        "quantity": 1.8,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 6
      },
      {
        "id": "ing-092-07",
        "recipeId": "rec-092",
        "name": "Gừng già tươi",
        "quantity": 100.4,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 7
      },
      {
        "id": "ing-092-08",
        "recipeId": "rec-092",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.0,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 8
      },
      {
        "id": "ing-092-09",
        "recipeId": "rec-092",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-092-10",
        "recipeId": "rec-092",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 10
      },
      {
        "id": "ing-092-11",
        "recipeId": "rec-092",
        "name": "Hạt tiêu đen Phú Quốc",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Xay vỡ thơm nồng",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-092-01",
        "recipeId": "rec-092",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-092-02",
        "recipeId": "rec-092",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-092-03",
        "recipeId": "rec-092",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-092-04",
        "recipeId": "rec-092",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-092-05",
        "recipeId": "rec-092",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-092-01",
        "recipeId": "rec-092",
        "originalUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "altText": "Sốt Nước Mắm Chua Ngọt Kẹo Tỏi Ớt Nổi",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-093",
    "title": "Mắm Nêm Pha Dứa Chua Ngọt Chấm Bò Cuốn",
    "slug": "mam-nem-pha-dua-chua-ngot-cham-bo-cuon-93",
    "description": "Mắm nêm nguyên chất đun sôi khử tanh, quậy cùng dứa băm nhuyễn, sả tỏi phi thơm nức mũi.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-019",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-02T10:00:00Z",
    "viewCount": 15496,
    "ratingAverage": 4.54,
    "ratingCount": 401,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 546,
      "protein": 21.0,
      "carbohydrates": 70.7,
      "fat": 11.5,
      "fiber": 3.0,
      "sodium": 1024.0
    },
    "ingredients": [
      {
        "id": "ing-093-01",
        "recipeId": "rec-093",
        "name": "Thảo quả khô",
        "quantity": 2.1,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 1
      },
      {
        "id": "ing-093-02",
        "recipeId": "rec-093",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.4,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 2
      },
      {
        "id": "ing-093-03",
        "recipeId": "rec-093",
        "name": "Thịt tôm sú tươi",
        "quantity": 379.5,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 3
      },
      {
        "id": "ing-093-04",
        "recipeId": "rec-093",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.2,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 4
      },
      {
        "id": "ing-093-05",
        "recipeId": "rec-093",
        "name": "Lá chanh non",
        "quantity": 10.7,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 5
      },
      {
        "id": "ing-093-06",
        "recipeId": "rec-093",
        "name": "Ớt hiểm tươi",
        "quantity": 3.6,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 6
      },
      {
        "id": "ing-093-07",
        "recipeId": "rec-093",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 45.1,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 7
      },
      {
        "id": "ing-093-08",
        "recipeId": "rec-093",
        "name": "Rau răm tươi",
        "quantity": 54.4,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 8
      },
      {
        "id": "ing-093-09",
        "recipeId": "rec-093",
        "name": "Trứng gà ta tươi",
        "quantity": 3.0,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 9
      },
      {
        "id": "ing-093-10",
        "recipeId": "rec-093",
        "name": "Hạt sen Huế tươi",
        "quantity": 159.3,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-093-01",
        "recipeId": "rec-093",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-093-02",
        "recipeId": "rec-093",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-093-03",
        "recipeId": "rec-093",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-093-04",
        "recipeId": "rec-093",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-093-05",
        "recipeId": "rec-093",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-093-06",
        "recipeId": "rec-093",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-093-01",
        "recipeId": "rec-093",
        "originalUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "altText": "Mắm Nêm Pha Dứa Chua Ngọt Chấm Bò Cuốn",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-094",
    "title": "Sốt Tiêu Đen Thảo Mộc Ướp Thịt Nướng",
    "slug": "sot-tieu-den-thao-moc-uop-thit-nuong-94",
    "description": "Hạt tiêu đen Phú Quốc rang thơm giã vỡ nấu cùng sốt dầu hào, bơ lạt và rượu vang đỏ sóng sánh.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 90,
    "servings": 6,
    "difficulty": 3,
    "status": 1,
    "categoryId": "cat-019",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-15T10:00:00Z",
    "viewCount": 8021,
    "ratingAverage": 4.44,
    "ratingCount": 323,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 424,
      "protein": 48.9,
      "carbohydrates": 71.3,
      "fat": 10.7,
      "fiber": 4.5,
      "sodium": 964.6
    },
    "ingredients": [
      {
        "id": "ing-094-01",
        "recipeId": "rec-094",
        "name": "Thịt nạc vai heo băm",
        "quantity": 317.0,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 1
      },
      {
        "id": "ing-094-02",
        "recipeId": "rec-094",
        "name": "Rau húng quế & ngò gai",
        "quantity": 236.6,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 2
      },
      {
        "id": "ing-094-03",
        "recipeId": "rec-094",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.9,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 3
      },
      {
        "id": "ing-094-04",
        "recipeId": "rec-094",
        "name": "Gừng già tươi",
        "quantity": 117.0,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 4
      },
      {
        "id": "ing-094-05",
        "recipeId": "rec-094",
        "name": "Hoa hồi khô",
        "quantity": 5.4,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 5
      },
      {
        "id": "ing-094-06",
        "recipeId": "rec-094",
        "name": "Sả cây tươi thơm",
        "quantity": 7.1,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 6
      },
      {
        "id": "ing-094-07",
        "recipeId": "rec-094",
        "name": "Tóp mỡ giòn rụm",
        "quantity": 56.5,
        "unit": "g",
        "notes": "Thắng giòn ráo mỡ",
        "orderIndex": 7
      },
      {
        "id": "ing-094-08",
        "recipeId": "rec-094",
        "name": "Quế thanh khô",
        "quantity": 2.1,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 8
      },
      {
        "id": "ing-094-09",
        "recipeId": "rec-094",
        "name": "Rau răm tươi",
        "quantity": 57.4,
        "unit": "g",
        "notes": "Nhặt lấy lá non",
        "orderIndex": 9
      },
      {
        "id": "ing-094-10",
        "recipeId": "rec-094",
        "name": "Mộc nhĩ đen khô",
        "quantity": 43.1,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-094-11",
        "recipeId": "rec-094",
        "name": "Ớt hiểm tươi",
        "quantity": 4.1,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 11
      },
      {
        "id": "ing-094-12",
        "recipeId": "rec-094",
        "name": "Đậu xanh xát vỏ",
        "quantity": 202.8,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 12
      },
      {
        "id": "ing-094-13",
        "recipeId": "rec-094",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 3.7,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-094-01",
        "recipeId": "rec-094",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-094-02",
        "recipeId": "rec-094",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-094-03",
        "recipeId": "rec-094",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-094-04",
        "recipeId": "rec-094",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-094-05",
        "recipeId": "rec-094",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-094-06",
        "recipeId": "rec-094",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-094-01",
        "recipeId": "rec-094",
        "originalUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "altText": "Sốt Tiêu Đen Thảo Mộc Ướp Thịt Nướng",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-095",
    "title": "Kho Quẹt Tôm Thịt Chấm Rau Củ Luộc",
    "slug": "kho-quet-tom-thit-cham-rau-cu-luoc-95",
    "description": "Tộ đất kho quẹt sệt kẹo thơm nức mỡ hành, tóp mỡ giòn tan cùng tôm khô dai ngọt chấm rau củ nhiệt đới.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 20,
    "servings": 8,
    "difficulty": 2,
    "status": 1,
    "categoryId": "cat-019",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-01T10:00:00Z",
    "viewCount": 16780,
    "ratingAverage": 4.91,
    "ratingCount": 375,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 430,
      "protein": 40.7,
      "carbohydrates": 41.4,
      "fat": 27.1,
      "fiber": 2.5,
      "sodium": 600.4
    },
    "ingredients": [
      {
        "id": "ing-095-01",
        "recipeId": "rec-095",
        "name": "Lá dứa nếp thơm",
        "quantity": 5.6,
        "unit": "nhánh",
        "notes": "Rửa sạch bó thành bó",
        "orderIndex": 1
      },
      {
        "id": "ing-095-02",
        "recipeId": "rec-095",
        "name": "Thịt tôm sú tươi",
        "quantity": 372.1,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 2
      },
      {
        "id": "ing-095-03",
        "recipeId": "rec-095",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 3
      },
      {
        "id": "ing-095-04",
        "recipeId": "rec-095",
        "name": "Hạt sen Huế tươi",
        "quantity": 149.8,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 4
      },
      {
        "id": "ing-095-05",
        "recipeId": "rec-095",
        "name": "Mộc nhĩ đen khô",
        "quantity": 38.5,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-095-06",
        "recipeId": "rec-095",
        "name": "Dầu thực vật cao cấp",
        "quantity": 51.9,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 6
      },
      {
        "id": "ing-095-07",
        "recipeId": "rec-095",
        "name": "Gừng già tươi",
        "quantity": 119.5,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 7
      },
      {
        "id": "ing-095-08",
        "recipeId": "rec-095",
        "name": "Dấm gạo nếp thơm",
        "quantity": 53.7,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 8
      },
      {
        "id": "ing-095-09",
        "recipeId": "rec-095",
        "name": "Thịt nạc vai heo băm",
        "quantity": 345.3,
        "unit": "g",
        "notes": "Có lẫn chút mỡ mềm",
        "orderIndex": 9
      },
      {
        "id": "ing-095-10",
        "recipeId": "rec-095",
        "name": "Bột năng tinh chế",
        "quantity": 107.8,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 10
      },
      {
        "id": "ing-095-11",
        "recipeId": "rec-095",
        "name": "Đường phèn kết tinh",
        "quantity": 31.3,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 11
      },
      {
        "id": "ing-095-12",
        "recipeId": "rec-095",
        "name": "Mè trắng rang thơm",
        "quantity": 29.2,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 12
      },
      {
        "id": "ing-095-13",
        "recipeId": "rec-095",
        "name": "Xì dầu đậu nành nguyên chất",
        "quantity": 3.3,
        "unit": "muỗng canh",
        "notes": "Loại ủ lên men tự nhiên",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-095-01",
        "recipeId": "rec-095",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-095-02",
        "recipeId": "rec-095",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-095-03",
        "recipeId": "rec-095",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-095-04",
        "recipeId": "rec-095",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-095-05",
        "recipeId": "rec-095",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-095-01",
        "recipeId": "rec-095",
        "originalUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
        "altText": "Kho Quẹt Tôm Thịt Chấm Rau Củ Luộc",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-096",
    "title": "Há Cảo Pha Lê Tôm Tươi Hấp Xửng Tre",
    "slug": "ha-cao-pha-le-tom-tuoi-hap-xung-tre-96",
    "description": "Lớp vỏ bột trong suốt lộ rõ con tôm hồng hào bên trong hấp nóng bốc khói chấm tương dấm ớt.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 40,
    "servings": 4,
    "difficulty": 1,
    "status": 0,
    "categoryId": "cat-020",
    "authorId": "usr-admin-001",
    "publishedAt": "2026-02-06T10:00:00Z",
    "viewCount": 253,
    "ratingAverage": 4.84,
    "ratingCount": 263,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 294,
      "protein": 23.7,
      "carbohydrates": 39.8,
      "fat": 27.0,
      "fiber": 5.7,
      "sodium": 872.7
    },
    "ingredients": [
      {
        "id": "ing-096-01",
        "recipeId": "rec-096",
        "name": "Sả cây tươi thơm",
        "quantity": 5.4,
        "unit": "nhánh",
        "notes": "Đập dập cắt khúc 5cm",
        "orderIndex": 1
      },
      {
        "id": "ing-096-02",
        "recipeId": "rec-096",
        "name": "Hoa hồi khô",
        "quantity": 5.5,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 2
      },
      {
        "id": "ing-096-03",
        "recipeId": "rec-096",
        "name": "Thịt tôm sú tươi",
        "quantity": 345.8,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 3
      },
      {
        "id": "ing-096-04",
        "recipeId": "rec-096",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 45.4,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 4
      },
      {
        "id": "ing-096-05",
        "recipeId": "rec-096",
        "name": "Nước mắm cá cơm truyền thống",
        "quantity": 4.3,
        "unit": "muỗng canh",
        "notes": "Loại 40 độ đạm",
        "orderIndex": 5
      },
      {
        "id": "ing-096-06",
        "recipeId": "rec-096",
        "name": "Nấm hương khô thơm",
        "quantity": 51.1,
        "unit": "g",
        "notes": "Ngâm nở thái chỉ",
        "orderIndex": 6
      },
      {
        "id": "ing-096-07",
        "recipeId": "rec-096",
        "name": "Lá chanh non",
        "quantity": 9.7,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 7
      },
      {
        "id": "ing-096-08",
        "recipeId": "rec-096",
        "name": "Bánh phở tươi sợi nhỏ",
        "quantity": 1.0,
        "unit": "kg",
        "notes": "Trụng qua nước sôi",
        "orderIndex": 8
      },
      {
        "id": "ing-096-09",
        "recipeId": "rec-096",
        "name": "Thảo quả khô",
        "quantity": 1.9,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 9
      },
      {
        "id": "ing-096-10",
        "recipeId": "rec-096",
        "name": "Hành tây củ lớn",
        "quantity": 2.0,
        "unit": "củ",
        "notes": "Nướng thơm bóc vỏ",
        "orderIndex": 10
      },
      {
        "id": "ing-096-11",
        "recipeId": "rec-096",
        "name": "Gừng già tươi",
        "quantity": 103.2,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 11
      },
      {
        "id": "ing-096-12",
        "recipeId": "rec-096",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.2,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 12
      },
      {
        "id": "ing-096-13",
        "recipeId": "rec-096",
        "name": "Trứng gà ta tươi",
        "quantity": 3.0,
        "unit": "quả",
        "notes": "Lấy cả lòng đỏ và trắng",
        "orderIndex": 13
      }
    ],
    "steps": [
      {
        "id": "step-096-01",
        "recipeId": "rec-096",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-096-02",
        "recipeId": "rec-096",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-096-03",
        "recipeId": "rec-096",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-096-04",
        "recipeId": "rec-096",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-096-05",
        "recipeId": "rec-096",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-096-06",
        "recipeId": "rec-096",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      },
      {
        "id": "step-096-07",
        "recipeId": "rec-096",
        "stepNumber": 7,
        "title": "Bước 7: Trình bày và thưởng thức",
        "description": "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-096-01",
        "recipeId": "rec-096",
        "originalUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "altText": "Há Cảo Pha Lê Tôm Tươi Hấp Xửng Tre",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-097",
    "title": "Xíu Mại Tôm Thịt Trứng Muối Hồng Kông",
    "slug": "xiu-mai-tom-thit-trung-muoi-hong-kong-97",
    "description": "Viên xíu mại thịt heo vai và tôm sú tươi ngon ngọt bọc vỏ hoành thánh vàng óng điểm hạt đậu Hà Lan.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 15,
    "cookTime": 30,
    "servings": 4,
    "difficulty": 1,
    "status": 0,
    "categoryId": "cat-020",
    "authorId": "usr-author-002",
    "publishedAt": "2026-02-23T10:00:00Z",
    "viewCount": 5718,
    "ratingAverage": 4.88,
    "ratingCount": 369,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 433,
      "protein": 35.9,
      "carbohydrates": 70.5,
      "fat": 21.6,
      "fiber": 5.3,
      "sodium": 1087.2
    },
    "ingredients": [
      {
        "id": "ing-097-01",
        "recipeId": "rec-097",
        "name": "Rau húng quế & ngò gai",
        "quantity": 209.2,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 1
      },
      {
        "id": "ing-097-02",
        "recipeId": "rec-097",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.1,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 2
      },
      {
        "id": "ing-097-03",
        "recipeId": "rec-097",
        "name": "Hành hoa & ngò rí",
        "quantity": 145.0,
        "unit": "g",
        "notes": "Rửa sạch xắt nhuyễn",
        "orderIndex": 3
      },
      {
        "id": "ing-097-04",
        "recipeId": "rec-097",
        "name": "Su hào tươi",
        "quantity": 1.1,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-097-05",
        "recipeId": "rec-097",
        "name": "Hạt sen Huế tươi",
        "quantity": 176.1,
        "unit": "g",
        "notes": "Bỏ tâm sen tránh đắng",
        "orderIndex": 5
      },
      {
        "id": "ing-097-06",
        "recipeId": "rec-097",
        "name": "Lạc rang đập dập",
        "quantity": 82.0,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 6
      },
      {
        "id": "ing-097-07",
        "recipeId": "rec-097",
        "name": "Lá chanh non",
        "quantity": 10.3,
        "unit": "lá",
        "notes": "Vò nhẹ dậy mùi thơm",
        "orderIndex": 7
      },
      {
        "id": "ing-097-08",
        "recipeId": "rec-097",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.1,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 8
      },
      {
        "id": "ing-097-09",
        "recipeId": "rec-097",
        "name": "Ớt hiểm tươi",
        "quantity": 3.9,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 9
      },
      {
        "id": "ing-097-10",
        "recipeId": "rec-097",
        "name": "Nước cốt dừa đậm đặc",
        "quantity": 260.8,
        "unit": "ml",
        "notes": "Vắt từ cơm dừa già",
        "orderIndex": 10
      },
      {
        "id": "ing-097-11",
        "recipeId": "rec-097",
        "name": "Dấm gạo nếp thơm",
        "quantity": 59.6,
        "unit": "ml",
        "notes": "Tạo vị chua thanh dịu",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-097-01",
        "recipeId": "rec-097",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-097-02",
        "recipeId": "rec-097",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-097-03",
        "recipeId": "rec-097",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-097-04",
        "recipeId": "rec-097",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-097-05",
        "recipeId": "rec-097",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-097-01",
        "recipeId": "rec-097",
        "originalUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "altText": "Xíu Mại Tôm Thịt Trứng Muối Hồng Kông",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-098",
    "title": "Bánh Bao Kim Sa Trứng Muối Tan Chảy",
    "slug": "banh-bao-kim-sa-trung-muoi-tan-chay-98",
    "description": "Vỏ bánh bao mềm xốp, khi bẻ đôi lớp nhân kem bơ trứng muối óng ả chảy tràn thơm ngậy.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 45,
    "cookTime": 30,
    "servings": 8,
    "difficulty": 1,
    "status": 0,
    "categoryId": "cat-020",
    "authorId": "usr-author-003",
    "publishedAt": "2026-02-12T10:00:00Z",
    "viewCount": 9780,
    "ratingAverage": 4.68,
    "ratingCount": 35,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 291,
      "protein": 22.8,
      "carbohydrates": 81.8,
      "fat": 31.5,
      "fiber": 4.1,
      "sodium": 508.1
    },
    "ingredients": [
      {
        "id": "ing-098-01",
        "recipeId": "rec-098",
        "name": "Bột năng tinh chế",
        "quantity": 106.4,
        "unit": "g",
        "notes": "Hòa tan với nước lọc",
        "orderIndex": 1
      },
      {
        "id": "ing-098-02",
        "recipeId": "rec-098",
        "name": "Mật ong rừng nguyên chất",
        "quantity": 3.1,
        "unit": "muỗng canh",
        "notes": "Ướp tạo độ bóng đẹp",
        "orderIndex": 2
      },
      {
        "id": "ing-098-03",
        "recipeId": "rec-098",
        "name": "Dầu hào Maggi hảo hạng",
        "quantity": 2.0,
        "unit": "muỗng canh",
        "notes": "Gia tăng hương umami",
        "orderIndex": 3
      },
      {
        "id": "ing-098-04",
        "recipeId": "rec-098",
        "name": "Mộc nhĩ đen khô",
        "quantity": 39.9,
        "unit": "g",
        "notes": "Ngâm nước ấm băm nhỏ",
        "orderIndex": 4
      },
      {
        "id": "ing-098-05",
        "recipeId": "rec-098",
        "name": "Lạc rang đập dập",
        "quantity": 72.2,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 5
      },
      {
        "id": "ing-098-06",
        "recipeId": "rec-098",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.2,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 6
      },
      {
        "id": "ing-098-07",
        "recipeId": "rec-098",
        "name": "Muối hạt tinh khiết",
        "quantity": 2.3,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 7
      },
      {
        "id": "ing-098-08",
        "recipeId": "rec-098",
        "name": "Su hào tươi",
        "quantity": 1.0,
        "unit": "củ",
        "notes": "Thái hạt lựu nhỏ",
        "orderIndex": 8
      },
      {
        "id": "ing-098-09",
        "recipeId": "rec-098",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 9
      },
      {
        "id": "ing-098-10",
        "recipeId": "rec-098",
        "name": "Rau húng quế & ngò gai",
        "quantity": 188.4,
        "unit": "g",
        "notes": "Ăn kèm tươi sống",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-098-01",
        "recipeId": "rec-098",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-098-02",
        "recipeId": "rec-098",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-098-03",
        "recipeId": "rec-098",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-098-04",
        "recipeId": "rec-098",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-098-05",
        "recipeId": "rec-098",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-098-01",
        "recipeId": "rec-098",
        "originalUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Bao Kim Sa Trứng Muối Tan Chảy",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-099",
    "title": "Chân Gà Hấp Tàu Xì Tương Đen Đậm Vị",
    "slug": "chan-ga-hap-tau-xi-tuong-den-dam-vi-99",
    "description": "Chân gà chiên phồng ninh nhừ trong nước sốt đậu đen tàu xì và hoa hồi mềm róc từng khớp xương.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 25,
    "cookTime": 20,
    "servings": 4,
    "difficulty": 2,
    "status": 0,
    "categoryId": "cat-020",
    "authorId": "usr-author-004",
    "publishedAt": "2026-02-15T10:00:00Z",
    "viewCount": 749,
    "ratingAverage": 4.94,
    "ratingCount": 394,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 313,
      "protein": 29.9,
      "carbohydrates": 79.9,
      "fat": 14.7,
      "fiber": 5.5,
      "sodium": 835.8
    },
    "ingredients": [
      {
        "id": "ing-099-01",
        "recipeId": "rec-099",
        "name": "Đường phèn kết tinh",
        "quantity": 29.8,
        "unit": "g",
        "notes": "Tạo vị ngọt thanh tao",
        "orderIndex": 1
      },
      {
        "id": "ing-099-02",
        "recipeId": "rec-099",
        "name": "Quế thanh khô",
        "quantity": 2.0,
        "unit": "thanh",
        "notes": "Rang thơm nhẹ lửa",
        "orderIndex": 2
      },
      {
        "id": "ing-099-03",
        "recipeId": "rec-099",
        "name": "Bơ lạt nguyên chất Pháp",
        "quantity": 56.8,
        "unit": "g",
        "notes": "Nấu chảy thơm ngậy",
        "orderIndex": 3
      },
      {
        "id": "ing-099-04",
        "recipeId": "rec-099",
        "name": "Hành baro (Tỏi tây)",
        "quantity": 1.1,
        "unit": "cây",
        "notes": "Thái xéo mỏng",
        "orderIndex": 4
      },
      {
        "id": "ing-099-05",
        "recipeId": "rec-099",
        "name": "Lạc rang đập dập",
        "quantity": 79.1,
        "unit": "g",
        "notes": "Bỏ vỏ giã dập vừa",
        "orderIndex": 5
      },
      {
        "id": "ing-099-06",
        "recipeId": "rec-099",
        "name": "Dầu thực vật cao cấp",
        "quantity": 45.6,
        "unit": "ml",
        "notes": "Dùng chiên xào",
        "orderIndex": 6
      },
      {
        "id": "ing-099-07",
        "recipeId": "rec-099",
        "name": "Thịt thăn bò tươi",
        "quantity": 558.9,
        "unit": "g",
        "notes": "Thái lát mỏng ngược thớ",
        "orderIndex": 7
      },
      {
        "id": "ing-099-08",
        "recipeId": "rec-099",
        "name": "Ớt hiểm tươi",
        "quantity": 4.7,
        "unit": "trái",
        "notes": "Thái lát mỏng",
        "orderIndex": 8
      },
      {
        "id": "ing-099-09",
        "recipeId": "rec-099",
        "name": "Đậu xanh xát vỏ",
        "quantity": 239.2,
        "unit": "g",
        "notes": "Ngâm nước 2 giờ hấp chín",
        "orderIndex": 9
      },
      {
        "id": "ing-099-10",
        "recipeId": "rec-099",
        "name": "Thịt tôm sú tươi",
        "quantity": 364.4,
        "unit": "g",
        "notes": "Bóc nõn rút chỉ đen",
        "orderIndex": 10
      },
      {
        "id": "ing-099-11",
        "recipeId": "rec-099",
        "name": "Mè trắng rang thơm",
        "quantity": 30.2,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 11
      }
    ],
    "steps": [
      {
        "id": "step-099-01",
        "recipeId": "rec-099",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-099-02",
        "recipeId": "rec-099",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-099-03",
        "recipeId": "rec-099",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-099-04",
        "recipeId": "rec-099",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-099-05",
        "recipeId": "rec-099",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      }
    ],
    "images": [
      {
        "id": "img-099-01",
        "recipeId": "rec-099",
        "originalUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "altText": "Chân Gà Hấp Tàu Xì Tương Đen Đậm Vị",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  },
  {
    "id": "rec-100",
    "title": "Bánh Xếp Hẹ Chiên Giòn Đáy",
    "slug": "banh-xep-he-chien-gion-day-100",
    "description": "Bánh xếp nhân tôm thịt hẹ tươi chiên áp chảo giòn rụm một mặt, vỏ trên mềm mượt chấm nước tương giấm đen.",
    "instructions": "Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng chuyên nghiệp.",
    "prepTime": 30,
    "cookTime": 40,
    "servings": 2,
    "difficulty": 2,
    "status": 0,
    "categoryId": "cat-020",
    "authorId": "usr-author-005",
    "publishedAt": "2026-02-19T10:00:00Z",
    "viewCount": 13098,
    "ratingAverage": 4.49,
    "ratingCount": 415,
    "notes": "Nên dùng nguyên liệu tươi hữu cơ vào buổi sáng sớm.",
    "isDeleted": false,
    "createdAt": "2026-02-01T08:00:00Z",
    "nutrition": {
      "calories": 650,
      "protein": 30.2,
      "carbohydrates": 75.0,
      "fat": 10.0,
      "fiber": 7.7,
      "sodium": 1059.2
    },
    "ingredients": [
      {
        "id": "ing-100-01",
        "recipeId": "rec-100",
        "name": "Miến dong làng So",
        "quantity": 119.9,
        "unit": "g",
        "notes": "Cắt khúc ngắn 3cm",
        "orderIndex": 1
      },
      {
        "id": "ing-100-02",
        "recipeId": "rec-100",
        "name": "Bột ngọt Ajinomoto",
        "quantity": 1.2,
        "unit": "muỗng cà phê",
        "notes": "Cân bằng vị giác",
        "orderIndex": 2
      },
      {
        "id": "ing-100-03",
        "recipeId": "rec-100",
        "name": "Chanh tươi mọng nước",
        "quantity": 2.0,
        "unit": "trái",
        "notes": "Cắt múi vắt lấy nước cốt",
        "orderIndex": 3
      },
      {
        "id": "ing-100-04",
        "recipeId": "rec-100",
        "name": "Bánh tráng nem truyền thống",
        "quantity": 1.0,
        "unit": "gói",
        "notes": "Loại mỏng giòn rụm",
        "orderIndex": 4
      },
      {
        "id": "ing-100-05",
        "recipeId": "rec-100",
        "name": "Thảo quả khô",
        "quantity": 1.9,
        "unit": "quả",
        "notes": "Nướng bẹp vỏ",
        "orderIndex": 5
      },
      {
        "id": "ing-100-06",
        "recipeId": "rec-100",
        "name": "Muối hạt tinh khiết",
        "quantity": 1.9,
        "unit": "muỗng cà phê",
        "notes": "Nêm vừa miệng",
        "orderIndex": 6
      },
      {
        "id": "ing-100-07",
        "recipeId": "rec-100",
        "name": "Hoa hồi khô",
        "quantity": 5.7,
        "unit": "hoa",
        "notes": "Rang vàng dậy mùi",
        "orderIndex": 7
      },
      {
        "id": "ing-100-08",
        "recipeId": "rec-100",
        "name": "Tỏi khô cô đơn",
        "quantity": 7.0,
        "unit": "tép",
        "notes": "Băm nhuyễn phi vàng",
        "orderIndex": 8
      },
      {
        "id": "ing-100-09",
        "recipeId": "rec-100",
        "name": "Gừng già tươi",
        "quantity": 105.6,
        "unit": "g",
        "notes": "Nướng đập dập thơm nức",
        "orderIndex": 9
      },
      {
        "id": "ing-100-10",
        "recipeId": "rec-100",
        "name": "Mè trắng rang thơm",
        "quantity": 30.8,
        "unit": "g",
        "notes": "Rang vàng thơm nức",
        "orderIndex": 10
      }
    ],
    "steps": [
      {
        "id": "step-100-01",
        "recipeId": "rec-100",
        "stepNumber": 1,
        "title": "Bước 1: Sơ chế nguyên liệu tươi",
        "description": "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.",
        "timerMinutes": 10
      },
      {
        "id": "step-100-02",
        "recipeId": "rec-100",
        "stepNumber": 2,
        "title": "Bước 2: Pha chế sốt ướp bí truyền",
        "description": "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.",
        "timerMinutes": 8
      },
      {
        "id": "step-100-03",
        "recipeId": "rec-100",
        "stepNumber": 3,
        "title": "Bước 3: Tẩm ướp thấm đượm gia vị",
        "description": "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.",
        "timerMinutes": 35
      },
      {
        "id": "step-100-04",
        "recipeId": "rec-100",
        "stepNumber": 4,
        "title": "Bước 4: Hầm nước dùng / Ninh lửa nhỏ",
        "description": "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.",
        "timerMinutes": 60
      },
      {
        "id": "step-100-05",
        "recipeId": "rec-100",
        "stepNumber": 5,
        "title": "Bước 5: Chế biến nhiệt / Xào nấu chín tới",
        "description": "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.",
        "timerMinutes": 15
      },
      {
        "id": "step-100-06",
        "recipeId": "rec-100",
        "stepNumber": 6,
        "title": "Bước 6: Nêm nếm hoàn thiện hương vị",
        "description": "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.",
        "timerMinutes": 5
      }
    ],
    "images": [
      {
        "id": "img-100-01",
        "recipeId": "rec-100",
        "originalUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "mediumUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "thumbnailUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        "altText": "Bánh Xếp Hẹ Chiên Giòn Đáy",
        "isPrimary": true,
        "orderIndex": 0
      }
    ]
  }
];
