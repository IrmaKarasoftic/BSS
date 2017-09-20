using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MmsApi.Models
{
    public class AllDataModel
    {
        public List<DiabetesDataModel> regularInsulinDose { get; set; }
        public List<DiabetesDataModel> preBreakfastBloodGlucoseDose { get; set; }
        public List<DiabetesDataModel> postBreakfastBloodGlucoseDose { get; set; }
        public List<DiabetesDataModel> preLunchBloodGlucoseDose { get; set; }
        public List<DiabetesDataModel> postLunchBloodGlucoseDose { get; set; }
        public List<DiabetesDataModel> preSupperBloodGlucoseDose { get; set; }
        public List<DiabetesDataModel> postSupperBloodGlucoseDose { get; set; }
        public List<DiabetesDataModel> typicalExcerciseActivity { get; set; }
        public List<DiabetesDataModel> moreThanUsualExcerciseActivity { get; set; }
        public List<DiabetesDataModel> lessThanUsualExcerciseActivity { get; set; }
    }
}