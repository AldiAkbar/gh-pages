import styles from './CovidForm.module.css';
import image from '../../image/covidFormImage.png';
import React, { useState } from 'react';
import Error from '../Error/Error';
import Button from '../ui/Button';
import { useSelector } from "react-redux";
import { updateProvinces } from '../../features/provincesSlice';
import { useDispatch } from "react-redux";

function CovidForm() {
    const dataProvinces = useSelector((store) => store.provinces.provinces);

    // buat dispatch
    const dispatch = useDispatch()

    // buat state formData
    const [formData, setFormData] = useState({
        provinsi: "",
        status: "",
        jumlah: "",
    });

    // buat state formError
    const [formError, setFormError] = useState({
        isProvinceEroor: false,
        isStatusError: false,
        isJumlahError: false
    });

    // buat function handleChange
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // buat function validate
    function validate() {
        // ambil semua data formError menggunakan spread operator, replace dengan data yang benar
        if (provinsi === "") {
            setFormError({
                ...formError,
                isProvinceError: true,
                isStatusError: false,
                isJumlahError: false
            });
            return false;
        }
        else if (status === "") {
            setFormError({
                ...formError,
                isProvinceError: false,
                isStatusError: true,
                isJumlahError: false
            });
            return false;
        }
        else if (jumlah === "") {
            setFormError({
                ...formError,
                isProvinceError: false,
                isStatusError: false,
                isJumlahError: true
            });
            return false;
        }
        else {
            setFormError({
                isProvinceError: false,
                isStatusError: false,
                isJumlahError: false
            })
            return true;
        }
    }

    // function handleSumbmit
    function updateCovid(e) {
        e.preventDefault();

        validate() && dispatch(updateProvinces([formData]));
    }

    const { provinsi, status, jumlah } = formData;
    const { isProvinceError, isStatusError, isJumlahError } = formError;

    return (
        <div className={styles.container}>
            <div className={styles.covidForm}>
                <div className={styles.covidForm__left}>
                    <img src={image} alt="formCovid" className={styles.covidForm__image} />
                </div>
                <div className={styles.covidForm__right}>
                    <h1 className={styles.covidForm__title}>Form Covid</h1>
                    <form onSubmit={updateCovid}>
                        <div className={styles.covidForm__formGroup}>
                            <label htmlFor="" className={styles.covidForm__label}>Provinsi</label>
                            <select name="provinsi" id="provinsi" value={provinsi} onChange={handleChange} className={styles.covidForm__select}>
                                <option value="">Pilih Provinsi</option>
                                {dataProvinces.map((province, index) => {
                                    return <option value={province.kota} key={index}>{province.kota}</option>
                                })}
                            </select>
                            {isProvinceError && <Error>Data provinsi harus ada.</Error>}
                        </div>
                        <div className={styles.covidForm__formGroup}>
                            <label htmlFor="" className={styles.covidForm__label}>Status</label>
                            <select name="status" id="status" value={status} onChange={handleChange} className={styles.covidForm__select}>
                                <option value="">Pilih Status</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Dirawat</option>
                                <option value="meninggal">Meninggal</option>
                            </select>
                            {isStatusError && <Error>Data status harus ada.</Error>}
                        </div>
                        <div className={styles.covidForm__formGroup}>
                            <label htmlFor="" className={styles.covidForm__label}>Jumlah</label>
                            <input type="number" id="jumlah" value={jumlah} name="jumlah" onChange={handleChange} className={styles.covidForm__input} />
                            {isJumlahError && <Error>Data jumlah harus ada.</Error>}
                        </div>
                        <Button size="lg" full >Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CovidForm;