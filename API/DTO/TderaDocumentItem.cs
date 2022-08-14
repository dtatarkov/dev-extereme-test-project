namespace API.DTO
{
    public class TderaDocumentItem
    {
        public double good_qty { get; set; }
        public long id_good_nakl { get; set; }
        public long id_hd_nakl { get; set; }
        public long id_inst { get; set; }
        public long id_pos { get; set; }
        public int? is_certificate { get; set; }
        public int? is_hole { get; set; }
        public int? place_qty { get; set; }
        public long pos_category_id { get; set; }
        public string pos_category_name { get; set; }
        public long pos_group_id { get; set; }
        public string pos_group_name { get; set; }
        public string pos_name { get; set; }
        public int pos_number { get; set; }
        public string pos_type { get; set; }
        public int pos_value { get; set; }
        public byte top_500 { get; set; }
        public int? type_place { get; set; }
    }
}
