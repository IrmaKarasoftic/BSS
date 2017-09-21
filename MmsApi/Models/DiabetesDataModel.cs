using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MmsApi.Models
{
    public class DiabetesDataModel
    {
        public DateTime DateMeasured { get; set; }
        public double Code { get; set; }
        public double Value { get; set; }
    }
}