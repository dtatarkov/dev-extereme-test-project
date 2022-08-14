using System;

namespace API.DTO
{
    public class TderaDocumentMetadata
    {
        public byte actual { get; set; }
        public byte can_return_place { get; set; }
        public DateTime dat_delivery { get; set; }
        public DateTime dat_doc { get; set; }
        public DateTime dat_zakaz { get; set; }
        public string doc_type { get; set; }
        public byte es_delivery_scheme { get; set; }
        public int good_count { get; set; }
        public long id_hd_nakl { get; set; }
        public long id_inst { get; set; }
        public long id_post { get; set; }
        public long id_sost { get; set; }
        public long id_zakaz { get; set; }
        public byte? is_certificate { get; set; }
        public byte is_parcel { get; set; }
        public byte is_single_contour { get; set; }
        public string name_post { get; set; }
        public long nom_doc { get; set; }
        public long nom_doc_main { get; set; }
        public long nom_route { get; set; }
        public long? nom_zak_ext { get; set; }
        public long? nom_zak_parcel { get; set; }
        public int place_count { get; set; }
        public int shop_name { get; set; }
    }
}
