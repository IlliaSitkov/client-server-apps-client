import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {LOCAL_STORAGE_TOKEN} from "../../../../shared/constants";
import {checkFormIsCorrect, checkGroupFormIsCorrect, onChangeHandler} from "../../../../shared/utils";
import {createGroup} from "../../../../store/groups/thunk";
import './GroupForm.css';
import {Input} from "../../../../common/Input/Input";
import {Textarea} from "../../../../common/Textarea/Textarea";

export const GroupForm = () => {
    const [formIsCorrect, setFormIsCorrect] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

    useEffect(() => {
        checkGroupFormIsCorrect(
            setFormIsCorrect,
            name,
            description
        );
    }, [name, description]);

    const clearForm = () => {
        setName('');
        setDescription('');
    };

    const saveGroup = () => {
        dispatch(createGroup({ name, description }, token));
        clearForm();
    };

    return (
        <div className='product-card mb-5'>
            <details>
                <summary>Створити групу товарів</summary>
                <div className="row">
                    <div className="col-md-12">
                        <Input
                            id='name'
                            type='text'
                            value={name}
                            placeholder='Введіть назву групи товарів'
                            label='Назва групи товарів'
                            required={true}
                            onChange={onChangeHandler(setName)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Textarea
                            value={description}
                            id='description'
                            required={true}
                            onChange={onChangeHandler(setDescription)}
                            label='Опис групи товарів'
                            placeholder='Введіть опис групи товарів'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <button
                            onClick={saveGroup}
                            disabled={!formIsCorrect}
                            className='btn btn-success'
                        >
                            Створити
                        </button>
                    </div>
                </div>
            </details>
        </div>
    );
}