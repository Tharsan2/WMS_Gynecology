// models/patient_admission_treatment_investigation_view.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const PatientAdmissionTreatmentInvestigationView = sequelize.define('PatientAdmissionTreatmentInvestigationView', {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true },
    full_name: DataTypes.STRING,
    address: DataTypes.STRING,
    blood_group: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    marrital_status: DataTypes.STRING,
    national_id_card: DataTypes.STRING,
    patient_phone_no: DataTypes.STRING,
    admission_id: DataTypes.INTEGER,
    admission_date: DataTypes.DATE,
    bed_number: DataTypes.STRING,
    ward_number: DataTypes.STRING,
    consultant_name: DataTypes.STRING,
    admission_status: DataTypes.STRING,
    admission_count: DataTypes.INTEGER,
    treatment_date: DataTypes.DATE,
    treatment_visit_id: DataTypes.STRING,
    doctor_seen_by: DataTypes.STRING,
    treatment_complaints: DataTypes.STRING,
    abnormal_bleeding_symptoms: DataTypes.STRING,
    blood_pressure: DataTypes.STRING,
    pulse_rate: DataTypes.INTEGER,
    abdominal_exam: DataTypes.STRING,
    gynaecological_exam: DataTypes.STRING,
    minor_examination: DataTypes.STRING,
    minor_examination_findings: DataTypes.STRING,
    major_surgical_interventions: DataTypes.STRING,
    medical_management: DataTypes.STRING,
    surgical_management: DataTypes.STRING,
    medical_history_diagnosis: DataTypes.STRING,
    medical_allergy: DataTypes.STRING,
    past_medical_conditions: DataTypes.STRING,
    past_surgical_history: DataTypes.STRING,
    investigation_fbc_wbc: DataTypes.STRING,
    investigation_fbc_hb: DataTypes.STRING,
    investigation_fbc_pt: DataTypes.STRING,
    investigation_ufr_wc: DataTypes.STRING,
    investigation_ufr_rc: DataTypes.STRING,
    investigation_ufr_protein: DataTypes.STRING,
    investigation_se_k: DataTypes.STRING,
    investigation_se_na: DataTypes.STRING,
    investigation_crp: DataTypes.STRING,
    investigation_fbs: DataTypes.STRING,
    investigation_ppbs_ab: DataTypes.STRING,
    investigation_ppbs_al: DataTypes.STRING,
    investigation_ppbs_ad: DataTypes.STRING,
    investigation_lft_alt: DataTypes.STRING,
    investigation_lft_ast: DataTypes.STRING,
    investigation_other: DataTypes.STRING,
    investigation_scan_mri: DataTypes.STRING,
    investigation_scan_ct: DataTypes.STRING,
    investigation_uss_tas: DataTypes.STRING,
    investigation_uss_tus: DataTypes.STRING
  }, {
    tableName: 'patient_admission_treatment_investigation_view',
    timestamps: false
  });

  return PatientAdmissionTreatmentInvestigationView;
};
