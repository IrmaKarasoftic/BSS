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
            var allData = new List<DiabetesDataModel>();
            var data = new AllDataModel();
            //data.regularInsulinDose = new List<DiabetesDataModel>();
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
                    using (TextReader tr = File.OpenText(path + fileName))
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
                            dataModel.DateMeasured = dt;
                            dataModel.Code = Convert.ToDouble(items[2]);
                            dataModel.Value = Convert.ToDouble(items[3]);
                            if (dataModel.Code == 60 || dataModel.Code == 61) allData.Add(dataModel);
                            if (dataModel.Code == 33) regularInsulinDose.Add(dataModel);
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
                data.regularInsulinDose = regularInsulinDose.Where(x=>x.Value<50 && x.Value>0).GroupBy(d => d.Value);
                var startDate = new DateTime(1990, 1, 1);
                data.preBreakfastBloodGlucoseDose = preBreakfastBloodGlucoseDose.Where(d=>d.DateMeasured>startDate).OrderBy(x => x.DateMeasured).Take(40).ToList();
                data.postBreakfastBloodGlucoseDose = postBreakfastBloodGlucoseDose.Where(d => d.DateMeasured > startDate).OrderBy(x => x.DateMeasured).Take(40).ToList();
                data.preLunchBloodGlucoseDose = preLunchBloodGlucoseDose.Where(d => d.DateMeasured > startDate).OrderBy(x => x.DateMeasured).Take(40).ToList();
                data.postLunchBloodGlucoseDose = postLunchBloodGlucoseDose.Where(d => d.DateMeasured > startDate).OrderBy(x => x.DateMeasured).Take(40).ToList();
                data.preSupperBloodGlucoseDose = preSupperBloodGlucoseDose.Where(d => d.DateMeasured > startDate).OrderBy(x => x.DateMeasured).Take(40).ToList();
                data.postSupperBloodGlucoseDose = postSupperBloodGlucoseDose.Where(d => d.DateMeasured > startDate).OrderBy(x => x.DateMeasured).Take(40).ToList();
                data.typicalExcerciseActivity = typicalExcerciseActivity.Where(d => d.DateMeasured > startDate).OrderBy(x => x.DateMeasured).Take(40).ToList();

                data.grouppedData = allData.GroupBy(d => d.DateMeasured)
                    .Where(x => x.ToList().Count == 2)
                    .Where(z => ((z.ToList()[0].Code == 60 && z.ToList()[1].Code == 61) || (z.ToList()[0].Code == 61 && z.ToList()[1].Code == 60)));

                return Ok(data);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        
    }
}