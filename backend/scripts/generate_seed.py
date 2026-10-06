#!/usr/bin/env python3
import json
import uuid
import random
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[àáạảãâầấậẩẫăằắặẳẵ]', 'a', text)
    text = re.sub(r'[èéẹẻẽêềếệểễ]', 'e', text)
    text = re.sub(r'[ìíịỉĩ]', 'i', text)
    text = re.sub(r'[òóọỏõôồốộổỗơờớợởỡ]', 'o', text)
    text = re.sub(r'[ùúụủũưừứựửữ]', 'u', text)
    text = re.sub(r'[ỳýỵỷỹ]', 'y', text)
    text = re.sub(r'[đ]', 'd', text)
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text

CATEGORIES = [
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
    ("Bò Bít Tết & Món Âu Hiện Đại", "modern-bistro-steaks", "Ribeye Steak sốt tiêu đen nấm truffle, khoai tây nghiền bơ mịn", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"),
]

USERS = [
    ("culinary_admin", "admin@culinaryblog.com", "Executive Chef Admin", "Admin", "Bếp trưởng điều hành với 18 năm kinh nghiệm nghệ thuật ẩm thực Đông Dương."),
    ("chef_nguyen", "nguyen.chef@culinaryblog.com", "Chef Nguyễn Văn Minh", "Author", "Nghệ nhân phở truyền thống và các món hầm niêu đất bí truyền xứ Kinh Kỳ."),
    ("pastry_le", "le.pastry@culinaryblog.com", "Lê Thục Đoan", "Author", "Chuyên gia bánh mì artisan và tráng miệng hiện đại phong cách Pháp - Á."),
    ("healthy_tran", "tran.healthy@culinaryblog.com", "Trần Mai Anh", "Author", "Chuyên gia dinh dưỡng lâm sàng, tác giả bộ thực đơn thực dưỡng lành mạnh."),
    ("bistro_marco", "marco.rossi@culinaryblog.com", "Marco Rossi", "Author", "Đầu bếp người Ý đam mê kết hợp ẩm thực Địa Trung Hải và gia vị nhiệt đới."),
]

RECIPE_TEMPLATES = [
    ("Phở Bò Tái Lăn Hà Nội", 0, "Bát phở thơm nức mùi gừng tỏi phi, thịt bò tái lăn mềm ngọt quyện cùng nước dùng ninh xương 12 giờ."),
    ("Phở Gà Ta Hoa Hồi Lá Chanh", 0, "Nước dùng thanh trong óng vàng mỡ gà, thịt gà ta dai giòn thơm thoang thoảng mùi lá chanh tươi."),
    ("Bún Thang Phố Cổ Cầu Kỳ", 0, "Bát bún tinh hoa đất Hà Thành với giò lụa, trứng tráng mỏng, thịt gà xé và chút tinh dầu cà cuống."),
    ("Bún Riêu Cua Bắp Bò Sườn Sụn", 0, "Nước dùng chua thanh vị giấm bỗng, riêu cua đồng béo ngậy ăn kèm rau sống hoa chuối bào."),
    ("Bún Bò Huế Chân Giò Sa Tế", 17, "Sợi bún to tròn trong làn nước dùng thơm nồng sả ớt, chả cua và tiết luộc mềm mọng."),
    ("Cá Kho Tộ Ba Chỉ Đậm Vị", 1, "Cá lóc đồng kho tiêu trong tộ đất liu riu, thịt ba chỉ tươm mỡ óng ánh nước hàng cánh gián."),
    ("Thịt Kho Tàu Trứng Cút Nước Dừa", 1, "Từng miếng thịt ba chỉ vuông vức mềm tan trong miệng, trứng cút ngấm trọn vị ngọt thanh của nước dừa xiêm."),
    ("Sườn Non Kho Tiêu Xanh Phú Quốc", 1, "Sườn non róc xương rim đậm vị mặn ngọt cay nồng từ những chùm tiêu xanh tươi mọng."),
    ("Bò Kho Tiêu Đen Bánh Mì Nóng", 1, "Nạm bò hầm mềm cùng cà rốt và quế hồi, nước sốt sánh mịn chấm bánh mì giòn rụm."),
    ("Gà Kho Gừng Nồi Đất", 1, "Gà ta chặt miếng vừa ăn kho thơm nức mũi mùi gừng tươi già, đưa cơm ngày mưa se lạnh."),
    ("Nem Rán Hà Nội Giòn Rụm", 2, "Vỏ nem giòn rụm bọc nhân thịt nạc vai băm, mộc nhĩ nấm hương, miến dong và trứng gà."),
    ("Chả Giò Rế Tôm Cua Cà Mau", 2, "Lớp bánh tráng rế vàng óng giòn tan ôm trọn phần nhân tôm đất và thịt cua biển ngọt lịm."),
    ("Chạo Tôm Bọc Cây Mía Nướng", 2, "Thịt tôm quết dẻo dai bọc quanh gióng mía tím ngọt ngào nướng trên than hoa đượm lửa."),
    ("Cánh Gà Chiên Nước Mắm Tỏi Ớt", 2, "Lớp da gà chiên giòn tan ngào đẫm sốt nước mắm chua cay mặn ngọt sóng sánh óng ả."),
    ("Mực Chiên Giòn Sốt Mayonnaise Wasabi", 2, "Khoanh mực tươi bao bột giòn rụm chấm cùng sốt béo ngậy the the kích thích vị giác."),
    ("Cơm Tấm Sườn Bì Chả Sài Gòn", 3, "Đĩa cơm tấm chuẩn vị Nam Bộ với sườn nướng mỡ hành, chả trứng hấp béo bùi và bì heo giòn dai."),
    ("Cơm Chiên Dương Châu Hải Sản", 3, "Hạt cơm săn bóng vàng ươm tơi xốp quyện cùng lạp xưởng tôm sú tươi và đậu Hà Lan giòn ngọt."),
    ("Cơm Chiên Cá Mặn Gà Xé Tay", 3, "Vị mằn mặn đặc trưng của khô cá chẽm hòa cùng thịt gà ta xé sợi và cơm chiên lửa lớn thơm khói."),
    ("Cơm Niêu Cháy Giòn Sốt Thịt Kho", 3, "Lớp cháy vàng ruộm giòn tan đáy niêu ăn kèm thịt kho tộ rưới thìa nước sốt bốc khói nghi ngút."),
    ("Cơm Gà Hải Nam Nước Luộc Béo Ngậy", 3, "Cơm nấu nước luộc gà óng vàng nghệ tây hạt dẻo thơm, thịt gà luộc da căng bóng giòn sần sật."),
    ("Gỏi Cuốn Tôm Thịt Tươi Mát", 4, "Tôm luộc đỏ au, thịt ba chỉ thái mỏng cùng hẹ và bún cuộn bánh tráng chấm tương đen bơ lạc."),
    ("Nộm Hoa Chuối Tai Heo Giòn Sần Sật", 4, "Hoa chuối tây thái mỏng ngâm chanh giòn ngọt trộn cùng tai heo luộc giòn sần sật và lạc rang."),
    ("Gỏi Ngó Sen Tôm Thịt Chua Ngọt", 4, "Ngó sen trắng nõn ngấm vị chua thanh cay nhẹ, tôm bóc nõn ngọt đậm đà chuẩn vị tiệc cưới."),
    ("Gỏi Bò Bóp Thấu Hành Tây Rau Càng Cua", 4, "Thịt bắp bò tái chanh mềm ngọt bóp cùng hành tây chua ngọt và rau càng cua tươi non xanh mướt."),
    ("Nộm Đu Đủ Bò Khô Phố Cổ", 4, "Đu Đủ xanh nạo sợi giòn tan, bò khô xé cay nồng hòa cùng nước mắm chua ngọt pha tỏi ớt truyền thống."),
    ("Bò Cuốn Lá Lốt Nướng Than Hoa", 5, "Thịt bò băm ướp sả ớt cuộn chặt trong lá lốt bánh tẻ, nướng xèo xèo dậy mùi thơm quyến rũ."),
    ("Sườn Cừu Nướng Hương Thảo Tỏi Đập", 5, "Sườn cừu hảo hạng tẩm ướp lá hương thảo và rượu vang đỏ, nướng chín tới hồng mọng nước."),
    ("Thịt Ba Chỉ Nướng Mắc Khén Tây Bắc", 5, "Hương thơm hoang dã của hạt mắc khén và hạt dổi rừng thấm đẫm vào từng thớ thịt nướng cháy cạnh."),
    ("Gà Nướng Mật Ong Rừng Tây Nguyên", 5, "Gà đồi nguyên con phết sốt mật ong rừng nướng than hồng da vàng giòn màu cánh gián hấp dẫn."),
    ("Tôm Sú Nướng Muối Ớt Xanh Xiên Que", 5, "Tôm sú tươi nhảy tanh tách tẩm muối hạt giã ớt xiêm xanh cay nồng nướng trên lửa than."),
    ("Cua Huỳnh Đế Hấp Nước Dừa Xiêm", 6, "Thịt cua chắc nịch ngọt ngào tự nhiên hấp cùng nước dừa xiêm béo nhẹ và gừng tươi."),
    ("Mực Trứng Hấp Gừng Hành Hoa", 6, "Mực trứng tươi rói bụng đầy ắp trứng béo bùi, hấp cách thủy cùng gừng cạo vỏ và hành hoa."),
    ("Tôm Sốt Bơ Tỏi Thảo Mộc", 6, "Tôm càng xanh áo lớp sốt bơ Pháp béo ngậy thơm lừng tỏi phi và lá mùi tây xắt nhuyễn."),
    ("Sò Điệp Nướng Mỡ Hành Đậu Phộng", 6, "Cồi sò điệp trắng muốt nướng bốc khói trên than, rưới mỡ hành xanh mướt và lạc rang giã dập."),
    ("Cá Hồi Áp Chảo Sốt Cam Tươi", 6, "Miếng fillet cá hồi Na Uy giòn da mềm mọng bên trong rưới sốt cam mật ong chua dịu thanh tao."),
    ("Đậu Hũ Non Sốt Nấm Đông Cô Chay", 7, "Miếng đậu hũ lụa mềm mượt như tan trong miệng ngập trong sốt nấm hương cô đặc đậm đà thanh tịnh."),
    ("Canh Nấm Hạt Sen Táo Đỏ Thực Dưỡng", 7, "Nước canh thanh ngọt tự nhiên từ nấm bào ngư, hạt sen Huế bùi bùi và táo đỏ bổ dưỡng."),
    ("Cơm Chiên Hạt Sen Lá Sen Chay", 7, "Cơm chiên ngũ sắc gói trong lá sen tươi hấp cách thủy đượm hương thơm tinh khiết của sen hạ."),
    ("Chả Giò Chay Khoai Môn Nấm Mèo", 7, "Khoai môn sáp bùi béo kết hợp nấm đùi gà và mộc nhĩ giòn ngọt trong vỏ bánh rế giòn rụm."),
    ("Gỏi Mít Non Trộn Rau Răm Đậu Phộng Chay", 7, "Mít non luộc chín xé sợi dai bùi trộn sốt chua ngọt, rau răm thơm the và mè rang vàng óng."),
    ("Mì Quảng Tôm Thịt Trứng Cút Xứ Quảng", 8, "Sợi mì vàng óng nghệ tươi, nước nhưn tôm thịt đậm đà sóng sánh ăn kèm bánh tráng mè nướng giòn."),
    ("Hủ Tiếu Nam Vang Khô Sốt Tôm Thịt", 8, "Sợi hủ tiếu dai trụng lòng đỏ trứng, trộn sốt tương đen đặc sánh kèm tôm tươi, gan heo và tóp mỡ."),
    ("Mì Xào Giòn Hải Sản Rau Củ Sốt Nâu", 8, "Vắt mì trứng chiên phồng xốp giòn tan chan nước sốt hải sản rau cải ngồng xanh mướt sánh mịn."),
    ("Cao Lầu Hội An Thịt Xá Xíu Da Heo Chiên", 8, "Món ăn di sản phố Hội với sợi mì ngâm tro củi, thịt xá xíu mềm thơm và tép mỡ chiên giòn rụm."),
    ("Bún Chả Hà Nội Than Hoa Nước Mắm Đu Đủ", 8, "Chả băm chả miếng nướng vàng rộm khói thả vào bát nước mắm chua ngọt dưa góp đu đủ giòn sần sật."),
    ("Bánh Mì Kẹp Thịt Nguội Pate Gan Béo", 9, "Chiếc bánh mì nóng hổi giòn rụm quết lớp pate béo ngậy, bơ tươi, dưa leo ngò rí và sốt ớt cay cay."),
    ("Bánh Mì Chảo Bò Xíu Mại Trứng Ốp La", 9, "Chảo gang xèo xèo miếng bít tết bò mềm, viên xíu mại đẫm sốt cà và quả trứng ốp la lòng đào tan chảy."),
    ("Bánh Mì Thịt Nướng Sả Sa Tế Sài Gòn", 9, "Từng xiên thịt nạc dăm ướp sả ớt nướng chín tới kẹp cùng đồ chua cà rốt củ cải giòn ngọt."),
    ("Bánh Bao Nhân Thịt Trứng Muối Vỏ Xốp", 9, "Vỏ bánh trắng muốt mềm xốp như mây ôm trọn nhân thịt heo băm nấm hương và lòng đỏ trứng muối bùi béo."),
    ("Xôi Mặn Thập Cẩm Chà Bông Lạp Xưởng", 9, "Hạt xôi nếp cái hoa vàng dẻo quánh rưới mỡ hành thơm phức, phủ đầy lạp xưởng, chả lụa và ruốc thịt."),
    ("Chè Khúc Bạch Hạnh Nhân Trái Vải", 10, "Từng viên khúc bạch phô mai sữa béo ngậy thanh mát trong nước đường phèn nhãn vải ngọt dịu."),
    ("Chè Bưởi An Giang Giòn Sần Sật", 10, "Cùi bưởi sơ chế kỹ giòn sần sật không hề đắng nấu cùng đậu xanh xát vỏ và nước cốt dừa sánh mịn."),
    ("Chè Hạt Sen Long Nhãn Cung Đình Huế", 10, "Hạt sen bùi béo bọc khéo léo trong múi long nhãn giòn ngọt ngào nấu đường phèn thanh mát."),
    ("Bánh Flan Caramel Cà Phê Trứng Béo", 10, "Bánh flan mềm mịn không rỗ khí tan ngay trên đầu lưỡi cùng lớp sốt đắng nhẹ của caramel cà phê đậm đặc."),
    ("Chè Ba Màu Đậu Đỏ Đậu Xanh Thạch Thơm", 10, "Ly chè rực rỡ sắc màu miền Tây với đậu đỏ bùi bùi, đậu xanh tán nhuyễn, thạch lá dứa và cốt dừa béo ngậy."),
    ("Trà Đào Cam Sả Mát Lạnh Mùa Hè", 11, "Vị chát dịu của trà đen hòa quyện cùng đào ngâm giòn ngọt, tinh dầu sả tươi và nước cốt cam mọng nước."),
    ("Trà Sen Vàng Hạt Sen Kem Cheese", 11, "Hương thơm thanh khiết của trà sen Bảo Lộc kết hợp hạt sen nấu mềm và lớp kem cheese béo mặn."),
    ("Cà Phê Muối Xứ Huế Béo Mặn Đậm Đà", 11, "Cà phê phin truyền thống thơm đượm hòa cùng lớp kem sữa mặn nhẹ bồng bềnh quyến rũ."),
    ("Trà Hoa Cúc Mật Ong Táo Đỏ An Thần", 11, "Ấm trà hoa cúc vàng ấm nóng tỏa hương thơm dịu nhẹ giúp thư giãn tinh thần sau ngày dài bận rộn."),
    ("Sinh Tố Bơ Sầu Riêng Sữa Đặc Béo Ngậy", 11, "Bơ sáp Đắk Lắk dẻo quánh xay cùng cơm sầu riêng Ri6 thơm lừng và sữa tươi nguyên kem mát lạnh."),
    ("Lẩu Thái Hải Sản Tôm Sú Chua Cay", 12, "Nồi lẩu sôi sùng sục đượm vị riềng sả lá chanh cốt dừa, ngập tràn tôm sú mực nang và nghêu tươi."),
    ("Lẩu Gà Lá É Phú Yên Đậm Đà Thảo Mộc", 12, "Thịt gà thả vườn săn chắc ngọt thịt nấu cùng măng tươi và đọt lá é the mát cay cay đầu lưỡi."),
    ("Lẩu Bò Nhúng Dấm Tươi Rau Rừng", 12, "Nước dùng chua thanh từ nước dừa và giấm gạo, nhúng thịt bắp bò mềm ngọt cuốn bánh tráng rau rừng chấm mắm nêm."),
    ("Lẩu Nấm Chim Bồ Câu Thanh Bổ", 12, "Nước lẩu ngọt lịm từ thịt chim bồ câu hầm hạt sen, nhúng đủ loại nấm tươi quý như nấm tùng nhung, nấm đùi gà."),
    ("Lẩu Cua Đồng Hột Vịt Lộn Thanh Mát", 12, "Gạch cua đồng đóng tảng vàng óng trên mặt nước lẩu riêu cà chua thơm nức, thêm trứng vịt lộn ngọt đậm đà."),
    ("Bánh Tráng Nướng Đà Lạt Trứng Cút Mỡ Hành", 13, "Pizza Việt Nam nướng than giòn rụm với trứng cút, xúc xích, khô bò, ruốc tôm và sốt tương ớt mayonnaise."),
    ("Bắp Xào Bơ Tép Khô Cay Thơm", 13, "Hạt bắp nếp ngọt dẻo xào đẫm bơ Tường An thơm phức cùng tép đồng rang và hành hoa xanh mướt."),
    ("Phá Lấu Bò Nước Cốt Dừa Chấm Bánh Mì", 13, "Nội tạng bò làm sạch ninh mềm đượm ngũ vị hương và nước cốt dừa béo thơm chấm bánh mì giòn tan."),
    ("Ốc Hương Xào Bơ Tỏi Bắp Ngọt", 13, "Ốc hương biển tươi giòn sần sật ngập trong sốt bơ tỏi vàng ươm thơm lừng ăn kèm bánh mì nóng."),
    ("Chân Gà Rút Xương Sốt Thái Cóc Non", 13, "Chân gà giòn sần sật ngấm đẫm sốt me cay mặn ngọt kiểu Thái cùng cóc non chua giòn và sả tắc thơm mát."),
    ("Cá Chẽm Hấp Tàu Xì Hong Kong", 14, "Thịt cá chẽm tươi ngọt tự nhiên hấp cùng nước tương hảo hạng, hành gừng thái chỉ và rưới dầu sôi thơm lừng."),
    ("Gà Ta Hấp Lá Chanh Giữ Trọn Vị Ngọt", 14, "Da gà vàng óng giòn sần sật, từng thớ thịt ngọt lịm đượm tinh dầu lá chanh non chấm muối tiêu chanh."),
    ("Mực Trứng Hấp Hành Gừng Giòn Ngọt", 14, "Mực câu trong ngày bụng đầy ắp trứng béo bùi, hấp lửa lớn chín tới giữ trọn độ giòn ngọt mọng nước."),
    ("Nấm Đông Cô Nhồi Thịt Hấp Sốt Dầu Hào", 14, "Tai nấm hương tươi nhồi giò sống tôm thịt hấp chín rưới sốt dầu hào óng ánh đậm đà bổ dưỡng."),
    ("Tôm Sú Hấp Bia Sả Tươi Thơm Lừng", 14, "Tôm sú biển to con hấp hơi bia tươi và những khúc sả đập dập thơm lừng chấm muối ớt chanh."),
    ("Bánh Xèo Miền Tây Tôm Nhảy Thịt Ba Rọi", 15, "Vỏ bánh xèo giòn rụm vàng ruộm vành mỏng cuốn xà lách cải bẹ xanh chấm nước mắm tỏi ớt chua ngọt."),
    ("Bánh Khọt Vũng Tàu Tôm Tươi Mỡ Hành", 15, "Từng chiếc bánh khọt nhỏ xinh giòn tan đáy chảo, nhân tôm tươi rắc bột tôm cháy và mỡ hành xanh bóng."),
    ("Bánh Cuốn Nóng Thịt Băm Mộc Nhĩ Chả Quế", 15, "Lớp bánh tráng mỏng tang ướt mềm nhân thịt băm mộc nhĩ chấm nước mắm ấm thơm tinh dầu cà cuống."),
    ("Bánh Bèo Chén Miền Trung Tôm Cháy Da Heo", 15, "Từng chén bánh bèo mềm mướt phủ bột tôm cháy đỏ hồng, tóp mỡ giòn rụm và thìa nước mắm ớt cay xé."),
    ("Bánh Bột Lọc Huế Tôm Thịt Trong Suốt", 15, "Lớp vỏ bột năng dai trong vắt lộ rõ con tôm rim mặn ngọt và miếng thịt mỡ trong veo gói lá chuối thơm."),
    ("Đậu Hũ Tứ Xuyên Cay Tê Lưỡi", 16, "Đậu hũ non mềm mịn nấu cùng thịt băm trong sốt tương cay Tứ Xuyên và hạt tiêu Tứ Xuyên tê tái nồng nàn."),
    ("Trứng Cuộn Tam Sắc Kiểu Nhật Mềm Mịn", 16, "Các lớp trứng gà tươi đánh bông cuộn đều tay cùng thanh cua, rong biển và cà rốt xắt hạt lựu mềm ngọt."),
    ("Đậu Hũ Nhồi Thịt Sốt Cà Chua Đậm Đà", 16, "Miếng đậu hũ chiên vàng nhồi giò sống thịt băm rim trong sốt cà chua tươi sánh mịn thơm mùi hành hoa."),
    ("Trứng Bác Cà Chua Cơm Nhà Bình Dị", 16, "Món ăn quốc dân mềm xốp béo ngậy vị trứng quyện trọn vị chua ngọt tự nhiên của cà chua chín mọng."),
    ("Đậu Hũ Lướt Ván Chấm Mắm Tôm Tía Tô", 16, "Miếng đậu hũ mềm ngoài giòn trong béo ngậy chấm bát mắm tôm đánh bông sủi bọt ớt chanh chuẩn vị."),
    ("Bún Mắm Nêm Thịt Luộc Heo Quay Xứ Huế", 17, "Bát bún đậm đà mắm nêm cá cơm nguyên chất, thịt heo quay da giòn và rau sống thơm ngát."),
    ("Bánh Canh Cua Giò Heo Nước Dùng Bánh Canh Sánh Sệt", 17, "Sợi bánh canh bột lọc dai dẻo ngập trong nước dùng súp cua đỏ au gạch, thịt cua bóc nõn và chả cua thơm bùi."),
    ("Cơm Hến Sông Hương Cay Nồng Đậm Vị", 17, "Cơm nguội trộn thịt hến xào, tóp mỡ giòn, da heo chiên, mè rang và thìa mắm ruốc Huế thơm lừng."),
    ("Nem Lụi Nướng Sả Chấm Nước Lèo Đậu Phộng", 17, "Thịt nem quết dẻo cuốn cây sả nướng than hoa thơm nức chấm nước sốt lèo gan heo đậu phộng béo bùi."),
    ("Bún Nghệ Xào Lòng Heo Xứ Huế Cay Nồng", 17, "Lòng heo làm sạch xào thơm cùng củ nghệ tươi giã nát, hẹ lá và ớt xiêm rừng ấm nồng màu vàng nghệ tươi."),
    ("Muối Ớt Xanh Nha Trang Sệt Kẹo Chấm Hải Sản", 18, "Nước chấm thần thánh sánh mịn từ ớt xiêm xanh, sữa đặc, nước cốt chanh tươi và lá chanh thái sợi."),
    ("Sốt Nước Mắm Chua Ngọt Kẹo Tỏi Ớt Nổi", 18, "Bí quyết pha nước mắm bất bại sánh kẹo như mật ong với tỏi ớt nổi đều tăm tắp thơm lừng."),
    ("Mắm Nêm Pha Dứa Chua Ngọt Chấm Bò Cuốn", 18, "Mắm nêm nguyên chất đun sôi khử tanh, quậy cùng dứa băm nhuyễn, sả tỏi phi thơm nức mũi."),
    ("Sốt Tiêu Đen Thảo Mộc Ướp Thịt Nướng", 18, "Hạt tiêu đen Phú Quốc rang thơm giã vỡ nấu cùng sốt dầu hào, bơ lạt và rượu vang đỏ sóng sánh."),
    ("Kho Quẹt Tôm Thịt Chấm Rau Củ Luộc", 18, "Tộ đất kho quẹt sệt kẹo thơm nức mỡ hành, tóp mỡ giòn tan cùng tôm khô dai ngọt chấm rau củ nhiệt đới."),
    ("Há Cảo Pha Lê Tôm Tươi Hấp Xửng Tre", 19, "Lớp vỏ bột trong suốt lộ rõ con tôm hồng hào bên trong hấp nóng bốc khói chấm tương dấm ớt."),
    ("Xíu Mại Tôm Thịt Trứng Muối Hồng Kông", 19, "Viên xíu mại thịt heo vai và tôm sú tươi ngon ngọt bọc vỏ hoành thánh vàng óng điểm hạt đậu Hà Lan."),
    ("Bánh Bao Kim Sa Trứng Muối Tan Chảy", 19, "Vỏ bánh bao mềm xốp, khi bẻ đôi lớp nhân kem bơ trứng muối óng ả chảy tràn thơm ngậy."),
    ("Chân Gà Hấp Tàu Xì Tương Đen Đậm Vị", 19, "Chân gà chiên phồng ninh nhừ trong nước sốt đậu đen tàu xì và hoa hồi mềm róc từng khớp xương."),
    ("Bánh Xếp Hẹ Chiên Giòn Đáy", 19, "Bánh xếp nhân tôm thịt hẹ tươi chiên áp chảo giòn rụm một mặt, vỏ trên mềm mượt chấm nước tương giấm đen."),
    ("Spaghetti Carbonara Sốt Trứng Phô Mai Pecorino", 20, "Mì Ý nấu al dente chuẩn gu quyện cùng thịt má heo Guanciale giòn thơm và sốt lòng đỏ trứng béo ngậy."),
    ("Pizza Margherita Phô Mai Mozzarella Tươi Lá Quế Tây", 20, "Đế pizza ủ chậm 48 giờ nướng lò củi phồng rộp xốp giòn phủ sốt cà chua San Marzano và phô mai tươi."),
    ("Tonkotsu Ramen Nước Xương Hầm Trứng Lòng Đào", 21, "Nước dùng xương heo cô đặc đậm đà 18 giờ, sợi ramen tươi ăn cùng thịt xá xíu Chashu mềm tan."),
    ("Cơm Bò Gyudon Nhật Bản Sốt Mirin Hành Tây", 21, "Thịt ba chỉ bò Mỹ thái mỏng xào chín tới cùng hành tây ngọt thanh trong sốt dashi mirin truyền thống."),
    ("Canh Tom Yum Kung Chua Cay Tôm Sú Cốt Dừa", 22, "Tô canh Tom Yum nghi ngút khói thơm lừng mùi riềng lá chanh sả, tôm sú căng mọng cùng vị béo ngậy cốt dừa."),
    ("Bò Bít Tết Thăn Ngoại Ribeye Sốt Nấm Truffle", 23, "Miếng thăn bò Ribeye Black Angus áp chảo bơ tỏi hương thảo chín vừa mọng nước rưới sốt kem nấm truffle.")
]

INGREDIENT_POOL = [
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
]

STEP_TEMPLATES = [
    ("Sơ chế nguyên liệu tươi", "Rửa sạch tất cả thịt cá và rau củ với nước muối loãng. Thịt thấm khô bằng khăn giấy chuyên dụng trước khi tẩm ướp. Rau thơm nhặt lá non, để thật ráo nước.", 10),
    ("Pha chế sốt ướp bí truyền", "Cho tỏi băm, hành phi, nước mắm ngon, tiêu đen, mật ong và dầu hào vào âu lớn. Khuấy đều tay đến khi các gia vị tan hoàn toàn và hòa quyện thành hỗn hợp sánh mịn.", 8),
    ("Tẩm ướp thấm đượm gia vị", "Trút phần thịt vào âu gia vị sốt ướp, dùng tay mát xa nhẹ nhàng từng thớ thịt. Đậy kín màng bọc thực phẩm và giữ trong ngăn mát tủ lạnh ít nhất 30-45 phút.", 35),
    ("Hầm nước dùng / Ninh lửa nhỏ", "Bắc nồi lên bếp, cho xương đã chần và túi thảo mộc thơm vào cùng 2 lít nước sôi. Hạ lửa nhỏ liu riu, thường xuyên hớt bọt để nước trong suốt óng ả.", 60),
    ("Chế biến nhiệt / Xào nấu chín tới", "Làm nóng chảo sâu lòng với chút mỡ hành hoặc dầu ăn. Trút nguyên liệu vào đảo nhanh tay trên lửa lớn đến khi săn lại, dậy mùi thơm nức mũi và giữ trọn độ mọng nước.", 15),
    ("Nêm nếm hoàn thiện hương vị", "Nếm thử nước sốt, điều chỉnh lượng nước mắm và đường phèn sao cho đạt độ cân bằng tuyệt đối giữa mặn, ngọt, chua thanh và the cay nhẹ nơi đầu lưỡi.", 5),
    ("Trình bày và thưởng thức", "Múc món ăn ra đĩa hoặc tô gốm mộc nóng hổi. Rắc thêm tiêu sọ xay vỡ, hành phi vàng óng và nhánh rau mùi tươi lên trên. Dùng ngay khi còn nóng để cảm nhận trọn vẹn tinh hoa ẩm thực.", 5),
]

def main():
    print("Generating seed data...")
    categories_sql = []
    category_ids = []
    
    for i, (name, slug, desc, img) in enumerate(CATEGORIES):
        cid = f"22222222-2222-2222-2222-{i+1:012d}"
        category_ids.append(cid)
        categories_sql.append(
            f"INSERT INTO categories (id, name, slug, description, image_url, created_at, is_deleted) "
            f"VALUES ('{cid}', '{name}', '{slug}', '{desc}', '{img}', NOW(), false) "
            f"ON CONFLICT (slug) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, image_url=EXCLUDED.image_url;"
        )

    users_sql = []
    user_ids = []
    for i, (uname, email, fname, role, bio) in enumerate(USERS):
        uid = f"11111111-1111-1111-1111-{i+1:012d}"
        user_ids.append(uid)
        users_sql.append(
            f"INSERT INTO users (id, username, email, password_hash, full_name, role, bio, email_confirmed, created_at, is_deleted) "
            f"VALUES ('{uid}', '{uname}', '{email}', 'AQAAAAEAACcQAAAAEHASH123456789_BCRYPT_SECURE_HASH', '{fname}', '{role}', '{bio}', true, NOW(), false) "
            f"ON CONFLICT (username) DO UPDATE SET full_name=EXCLUDED.full_name, role=EXCLUDED.role, bio=EXCLUDED.bio;"
        )

    recipes_sql = []
    ingredients_sql = []
    steps_sql = []
    images_sql = []

    # Generate 100 recipes exactly
    total_recipes = 100
    for idx in range(total_recipes):
        rid = f"33333333-3333-3333-3333-{idx+1:012d}"
        template_idx = idx % len(RECIPE_TEMPLATES)
        title, cat_index, desc = RECIPE_TEMPLATES[template_idx]
        if idx >= len(RECIPE_TEMPLATES):
            title = f"{title} (Phiên Bản Đặc Biệt {idx - len(RECIPE_TEMPLATES) + 2})"
            desc = f"{desc} Công thức gia truyền tinh chỉnh nâng tầm vị giác."
        
        slug = f"{slugify(title)}-{idx+1}"
        cid = category_ids[cat_index % len(category_ids)]
        uid = user_ids[idx % len(user_ids)]
        
        prep_time = random.choice([15, 20, 25, 30, 45])
        cook_time = random.choice([20, 30, 40, 45, 60, 90])
        servings = random.choice([2, 4, 4, 6, 8])
        difficulty = random.choice(['Easy', 'Medium', 'Medium', 'Hard'])
        status = 'Published' if idx < 95 else 'Draft'
        view_count = random.randint(120, 15400)
        rating_avg = round(random.uniform(4.4, 5.0), 2)
        rating_count = random.randint(15, 420)
        
        calories = random.randint(280, 750)
        protein = round(random.uniform(18.0, 52.0), 2)
        carbs = round(random.uniform(25.0, 85.0), 2)
        fat = round(random.uniform(8.0, 36.0), 2)
        fiber = round(random.uniform(2.0, 8.5), 2)
        sugar = round(random.uniform(2.0, 12.0), 2)
        sodium = round(random.uniform(450.0, 1150.0), 2)

        safe_desc = desc.replace("'", "''")
        safe_title = title.replace("'", "''")

        recipes_sql.append(
            f"INSERT INTO recipes (id, title, slug, description, instructions, notes, prep_time_minutes, cook_time_minutes, servings, difficulty, status, published_at, view_count, rating_average, rating_count, category_id, author_id, calories, protein, carbohydrates, fat, fiber, sugar, sodium, created_at, is_deleted) "
            f"VALUES ('{rid}', '{safe_title}', '{slug}', '{safe_desc}', 'Chi tiết công thức theo từng bước chuẩn hóa của bếp trưởng.', 'Nên chọn nguyên liệu tươi hữu cơ vào buổi sáng.', {prep_time}, {cook_time}, {servings}, '{difficulty}', '{status}', NOW() - INTERVAL '{idx*2} hours', {view_count}, {rating_avg}, {rating_count}, '{cid}', '{uid}', {calories}, {protein}, {carbs}, {fat}, {fiber}, {sugar}, {sodium}, NOW(), false) "
            f"ON CONFLICT (slug) DO UPDATE SET title=EXCLUDED.title, description=EXCLUDED.description;"
        )

        # Generate AT LEAST 10 ingredients (10 to 12 ingredients per recipe!)
        num_ingredients = random.randint(10, 13)
        chosen_ingredients = random.sample(INGREDIENT_POOL, num_ingredients)
        for ing_idx, (ing_name, qty, unit, notes) in enumerate(chosen_ingredients):
            ing_id = f"44444444-4444-4444-{idx+1:04d}-{ing_idx+1:08d}"
            safe_ing_name = ing_name.replace("'", "''")
            safe_notes = notes.replace("'", "''")
            qty_val = float(qty) * round(random.uniform(0.8, 1.3), 1)
            ingredients_sql.append(
                f"INSERT INTO recipe_ingredients (id, recipe_id, name, quantity, unit, notes, order_index, created_at, is_deleted) "
                f"VALUES ('{ing_id}', '{rid}', '{safe_ing_name}', {qty_val:.1f}, '{unit}', '{safe_notes}', {ing_idx+1}, NOW(), false) "
                f"ON CONFLICT (id) DO NOTHING;"
            )

        # Generate AT LEAST 5 steps (5 to 7 steps per recipe!)
        num_steps = random.randint(5, 7)
        for step_idx in range(num_steps):
            step_id = f"55555555-5555-5555-{idx+1:04d}-{step_idx+1:08d}"
            s_title, s_desc, timer = STEP_TEMPLATES[step_idx]
            safe_s_title = f"Bước {step_idx+1}: {s_title}".replace("'", "''")
            safe_s_desc = s_desc.replace("'", "''")
            steps_sql.append(
                f"INSERT INTO recipe_steps (id, recipe_id, step_number, title, description, timer_minutes, created_at, is_deleted) "
                f"VALUES ('{step_id}', '{rid}', {step_idx+1}, '{safe_s_title}', '{safe_s_desc}', {timer}, NOW(), false) "
                f"ON CONFLICT (id) DO NOTHING;"
            )

        # Primary Image
        img_id = f"66666666-6666-6666-{idx+1:04d}-00000001"
        cat_img = CATEGORIES[cat_index % len(CATEGORIES)][3]
        images_sql.append(
            f"INSERT INTO recipe_images (id, recipe_id, original_url, thumbnail_url, alt_text, is_primary, display_order, created_at, is_deleted) "
            f"VALUES ('{img_id}', '{rid}', '{cat_img}', '{cat_img}', '{safe_title}', true, 0, NOW(), false) "
            f"ON CONFLICT (id) DO NOTHING;"
        )

    # Write out 02_seed_data.sql
    with open("backend/scripts/02_seed_data.sql", "w", encoding="utf-8") as f:
        f.write("-- ==============================================================================\n")
        f.write("-- CULINARY BLOG & RECIPE MANAGEMENT - SEED DATA FOR POSTGRESQL 16 DOCKER\n")
        f.write(f"-- Categories: {len(CATEGORIES)} (>= 20 required)\n")
        f.write(f"-- Recipes: {total_recipes} (>= 100 required)\n")
        f.write(f"-- Ingredients: >= 10 per recipe ({len(ingredients_sql)} total)\n")
        f.write(f"-- Steps: >= 5 per recipe ({len(steps_sql)} total)\n")
        f.write("-- ==============================================================================\n\n")
        
        f.write("-- 1. Users\n")
        f.write("\n".join(users_sql) + "\n\n")
        
        f.write("-- 2. Categories\n")
        f.write("\n".join(categories_sql) + "\n\n")
        
        f.write("-- 3. Recipes\n")
        f.write("\n".join(recipes_sql) + "\n\n")
        
        f.write("-- 4. Recipe Ingredients (>= 10 per recipe)\n")
        f.write("\n".join(ingredients_sql) + "\n\n")
        
        f.write("-- 5. Recipe Steps (>= 5 per recipe)\n")
        f.write("\n".join(steps_sql) + "\n\n")
        
        f.write("-- 6. Recipe Images\n")
        f.write("\n".join(images_sql) + "\n\n")

    print(f"Generated 02_seed_data.sql successfully!")
    print(f"Categories: {len(CATEGORIES)}")
    print(f"Users: {len(USERS)}")
    print(f"Recipes: {total_recipes}")
    print(f"Ingredients: {len(ingredients_sql)}")
    print(f"Steps: {len(steps_sql)}")
    print(f"Images: {len(images_sql)}")

if __name__ == "__main__":
    main()
