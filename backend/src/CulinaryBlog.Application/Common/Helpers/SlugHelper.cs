using System.Text.RegularExpressions;

namespace CulinaryBlog.Application.Common.Helpers;

public static class SlugHelper
{
    public static string GenerateSlug(string title)
    {
        if (string.IsNullOrWhiteSpace(title)) return string.Empty;

        var str = title.ToLowerInvariant().Trim();

        // Thay thế ký tự tiếng Việt có dấu
        string[] vietnameseSigns = new string[]
        {
            "aàảãáạăằẳẵắặâầẩẫấậ", "dđ", "eèẻẽéẹêềểễếệ",
            "iìỉĩíị", "oòỏõóọôồổỗốộơờởỡớợ", "uùủũúụưừửữứự",
            "yỳỷỹýỵ"
        };

        for (int i = 0; i < vietnameseSigns.Length; i++)
        {
            for (int j = 1; j < vietnameseSigns[i].Length; j++)
            {
                str = str.Replace(vietnameseSigns[i][j], vietnameseSigns[i][0]);
            }
        }

        // Xóa ký tự đặc biệt
        str = Regex.Replace(str, @"[^a-z0-9\s-]", "");
        // Đổi khoảng trắng thành dấu gạch ngang
        str = Regex.Replace(str, @"\s+", "-").Trim('-');
        // Xóa các dấu gạch ngang thừa
        str = Regex.Replace(str, @"-+", "-");

        return str;
    }
}