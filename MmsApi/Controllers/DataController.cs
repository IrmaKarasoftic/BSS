using System;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.IO;
using System.Diagnostics;
using MmsApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace MmsApi.Controllers
{
    public class DataController: ApiController
    {

        public IHttpActionResult Get()
        {
            var data = new AllDataModel();
            data.regularInsulinDose = new List<DiabetesDataModel>();
            data.preBreakfastBloodGlucoseDose = new List<DiabetesDataModel>();
            data.postBreakfastBloodGlucoseDose = new List<DiabetesDataModel>();
            data.preLunchBloodGlucoseDose = new List<DiabetesDataModel>();
            data.postLunchBloodGlucoseDose = new List<DiabetesDataModel>();
            data.preSupperBloodGlucoseDose = new List<DiabetesDataModel>();
            data.postSupperBloodGlucoseDose = new List<DiabetesDataModel>();
            data.typicalExcerciseActivity = new List<DiabetesDataModel>();

            var regularInsulinDose = new List<DiabetesDataModel>();
            var preBreakfastBloodGlucoseDose = new List<DiabetesDataModel>();
            var postBreakfastBloodGlucoseDose = new List<DiabetesDataModel>();
            var preLunchBloodGlucoseDose = new List<DiabetesDataModel>();
            var postLunchBloodGlucoseDose = new List<DiabetesDataModel>();
            var preSupperBloodGlucoseDose = new List<DiabetesDataModel>();
            var postSupperBloodGlucoseDose = new List<DiabetesDataModel>();
            var typicalExcerciseActivity = new List<DiabetesDataModel>();
            try
            {
                string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Diabetes-Data\");
                var allFiles = Directory.GetFiles(path);
                foreach (var files in allFiles)
                {
                    FileInfo info = new FileInfo(files);
                    var fileName = Path.GetFileName(info.FullName);
                    using (TextReader tr = File.OpenText(path+fileName))
                    {
                        string line;
                        while ((line = tr.ReadLine()) != null)
                        {
                            // split the line of text into a collection
                            string[] items = line.Split('\t');
                            var dataModel = new DiabetesDataModel();
                            string[] date = items[0].Split('-');
                            string[] time = items[1].Split(':');
                            DateTime dt = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[0]), Convert.ToInt32(date[1]), Convert.ToInt32(time[0]), Convert.ToInt32(time[1]), 0);
                            dataModel.DateMesured = dt;
                            dataModel.Code = Convert.ToDouble(items[2]);
                            dataModel.Value = Convert.ToDouble(items[3]);
                            if(dataModel.Code == 33) data.regularInsulinDose.Add(dataModel);
                            else if (dataModel.Code == 58) preBreakfastBloodGlucoseDose.Add(dataModel);
                            else if (dataModel.Code == 59) postBreakfastBloodGlucoseDose.Add(dataModel);
                            else if (dataModel.Code == 60) preLunchBloodGlucoseDose.Add(dataModel);
                            else if (dataModel.Code == 61) postLunchBloodGlucoseDose.Add(dataModel);
                            else if (dataModel.Code == 62) preSupperBloodGlucoseDose.Add(dataModel);
                            else if (dataModel.Code == 63) postSupperBloodGlucoseDose.Add(dataModel);
                            else if (dataModel.Code == 69) typicalExcerciseActivity.Add(dataModel);
                        }
                    }
                }
                data.preBreakfastBloodGlucoseDose = preBreakfastBloodGlucoseDose.OrderBy(x => x.Value).ToList();
                data.postBreakfastBloodGlucoseDose = postBreakfastBloodGlucoseDose.OrderBy(x => x.Value).ToList();
                data.preLunchBloodGlucoseDose = preLunchBloodGlucoseDose.OrderBy(x => x.Value).ToList();
                data.postLunchBloodGlucoseDose = postLunchBloodGlucoseDose.OrderBy(x => x.Value).ToList();
                data.preSupperBloodGlucoseDose = preSupperBloodGlucoseDose.OrderBy(x => x.Value).ToList();
                data.postSupperBloodGlucoseDose = postSupperBloodGlucoseDose.OrderBy(x => x.Value).ToList();
                data.typicalExcerciseActivity = typicalExcerciseActivity.OrderBy(x => x.Value).ToList();
                return Ok(data);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        
    }
}