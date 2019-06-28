namespace EzDeal.Repository.ViewModel
{
    
    public class AnuncioViewModel
    { public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public int Costo_Servicio { get; set; }
        public bool Esta_Habilitado { get; set; }
        public float Valoracion { get; set; }
        public string Dia { get; set; }
        public string HoraInicio { get; set; }
        public string HoraFin { get; set; }
        public int? AnuncianteId { get; set; }
        public string AnuncianteNombre {get;set;}
        public int? ServicioId { get; set; }
        public string ServicioNombre {get; set;}
        
    }
}