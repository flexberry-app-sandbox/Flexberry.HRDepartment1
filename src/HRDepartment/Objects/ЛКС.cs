﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.HRDepartment
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// ЛКС.
    /// </summary>
    // *** Start programmer edit section *** (ЛКС CustomAttributes)

    // *** End programmer edit section *** (ЛКС CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЛКСE", new string[] {
            "ID as \'ID\'",
            "ФИО as \'ФИО\'",
            "Контакты as \'Контакты\'",
            "Должность as \'Должность\'",
            "Дата_приема as \'Дата_приема\'",
            "Отдел as \'Отдел\'",
            "Отдел.Название as \'Название\'"}, Hidden=new string[] {
            "Отдел.Название"})]
    [MasterViewDefineAttribute("ЛКСE", "Отдел", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    [View("ЛКСL", new string[] {
            "ID as \'ID\'",
            "ФИО as \'ФИО\'",
            "Контакты as \'Контакты\'",
            "Должность as \'Должность\'",
            "Дата_приема as \'Дата_приема\'",
            "Отдел.Название as \'Название\'"})]
    public class ЛКС : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private string fФИО;
        
        private string fКонтакты;
        
        private System.DateTime fДата_приема;
        
        private IIS.HRDepartment.Отдел fОтдел;
        
        private IIS.HRDepartment.Должность fДолжность;
        
        // *** Start programmer edit section *** (ЛКС CustomMembers)

        // *** End programmer edit section *** (ЛКС CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (ЛКС.ID CustomAttributes)

        // *** End programmer edit section *** (ЛКС.ID CustomAttributes)
        [NotNull()]
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (ЛКС.ID Get start)

                // *** End programmer edit section *** (ЛКС.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (ЛКС.ID Get end)

                // *** End programmer edit section *** (ЛКС.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЛКС.ID Set start)

                // *** End programmer edit section *** (ЛКС.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (ЛКС.ID Set end)

                // *** End programmer edit section *** (ЛКС.ID Set end)
            }
        }
        
        /// <summary>
        /// Дата_приема.
        /// </summary>
        // *** Start programmer edit section *** (ЛКС.Дата_приема CustomAttributes)

        // *** End programmer edit section *** (ЛКС.Дата_приема CustomAttributes)
        [NotNull()]
        public virtual System.DateTime Дата_приема
        {
            get
            {
                // *** Start programmer edit section *** (ЛКС.Дата_приема Get start)

                // *** End programmer edit section *** (ЛКС.Дата_приема Get start)
                System.DateTime result = this.fДата_приема;
                // *** Start programmer edit section *** (ЛКС.Дата_приема Get end)

                // *** End programmer edit section *** (ЛКС.Дата_приема Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЛКС.Дата_приема Set start)

                // *** End programmer edit section *** (ЛКС.Дата_приема Set start)
                this.fДата_приема = value;
                // *** Start programmer edit section *** (ЛКС.Дата_приема Set end)

                // *** End programmer edit section *** (ЛКС.Дата_приема Set end)
            }
        }
        
        /// <summary>
        /// Контакты.
        /// </summary>
        // *** Start programmer edit section *** (ЛКС.Контакты CustomAttributes)

        // *** End programmer edit section *** (ЛКС.Контакты CustomAttributes)
        [StrLen(255)]
        public virtual string Контакты
        {
            get
            {
                // *** Start programmer edit section *** (ЛКС.Контакты Get start)

                // *** End programmer edit section *** (ЛКС.Контакты Get start)
                string result = this.fКонтакты;
                // *** Start programmer edit section *** (ЛКС.Контакты Get end)

                // *** End programmer edit section *** (ЛКС.Контакты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЛКС.Контакты Set start)

                // *** End programmer edit section *** (ЛКС.Контакты Set start)
                this.fКонтакты = value;
                // *** Start programmer edit section *** (ЛКС.Контакты Set end)

                // *** End programmer edit section *** (ЛКС.Контакты Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (ЛКС.ФИО CustomAttributes)

        // *** End programmer edit section *** (ЛКС.ФИО CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (ЛКС.ФИО Get start)

                // *** End programmer edit section *** (ЛКС.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (ЛКС.ФИО Get end)

                // *** End programmer edit section *** (ЛКС.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЛКС.ФИО Set start)

                // *** End programmer edit section *** (ЛКС.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (ЛКС.ФИО Set end)

                // *** End programmer edit section *** (ЛКС.ФИО Set end)
            }
        }
        
        /// <summary>
        /// ЛКС.
        /// </summary>
        // *** Start programmer edit section *** (ЛКС.Должность CustomAttributes)

        // *** End programmer edit section *** (ЛКС.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.HRDepartment.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (ЛКС.Должность Get start)

                // *** End programmer edit section *** (ЛКС.Должность Get start)
                IIS.HRDepartment.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (ЛКС.Должность Get end)

                // *** End programmer edit section *** (ЛКС.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЛКС.Должность Set start)

                // *** End programmer edit section *** (ЛКС.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (ЛКС.Должность Set end)

                // *** End programmer edit section *** (ЛКС.Должность Set end)
            }
        }
        
        /// <summary>
        /// ЛКС.
        /// </summary>
        // *** Start programmer edit section *** (ЛКС.Отдел CustomAttributes)

        // *** End programmer edit section *** (ЛКС.Отдел CustomAttributes)
        [PropertyStorage(new string[] {
                "Отдел"})]
        [NotNull()]
        public virtual IIS.HRDepartment.Отдел Отдел
        {
            get
            {
                // *** Start programmer edit section *** (ЛКС.Отдел Get start)

                // *** End programmer edit section *** (ЛКС.Отдел Get start)
                IIS.HRDepartment.Отдел result = this.fОтдел;
                // *** Start programmer edit section *** (ЛКС.Отдел Get end)

                // *** End programmer edit section *** (ЛКС.Отдел Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЛКС.Отдел Set start)

                // *** End programmer edit section *** (ЛКС.Отдел Set start)
                this.fОтдел = value;
                // *** Start programmer edit section *** (ЛКС.Отдел Set end)

                // *** End programmer edit section *** (ЛКС.Отдел Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЛКСE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛКСE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛКСE", typeof(IIS.HRDepartment.ЛКС));
                }
            }
            
            /// <summary>
            /// "ЛКСL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛКСL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛКСL", typeof(IIS.HRDepartment.ЛКС));
                }
            }
        }
    }
}
