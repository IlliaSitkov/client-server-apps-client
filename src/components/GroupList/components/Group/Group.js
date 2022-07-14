import React, {useEffect, useState} from 'react';
import {checkGroupFormIsCorrect, onChangeHandler} from '../../../../shared/utils';
import {LOCAL_STORAGE_TOKEN} from '../../../../shared/constants';
import * as groupThunk from '../../../../store/groups/thunk';
import './Group.css';
import {Input} from "../../../../common/Input/Input";
import {Textarea} from "../../../../common/Textarea/Textarea";
import {useDispatch} from "react-redux";


export const Group = ({ group }) => {
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[changesMade, setChangesMade] = useState(false);
    const[formIsCorrect, setFormIsCorrect] = useState(true);

    const dispatch = useDispatch();

    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

    useEffect(() => {
        setName(group.name);
        setDescription(group.description);
    }, [group]);

    useEffect(() => {
        setChangesMade(
            group.name !== name &&
            group.description !== description
        );
        checkGroupFormIsCorrect(setFormIsCorrect, name, description);
    }, [name, description, group]);

    const deleteGroup = () => {
        dispatch(groupThunk.deleteGroup(group.id, token));
    };

    const updateGroup = () => {
        dispatch(groupThunk.updateGroup(group.id, { name, description } , token));
    };

    return (
        <div className="product-card">
            <details>
                <summary>{name}</summary>
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
                <div className="row">
                    <div className='mt-3 col-12 d-flex justify-content-between gap-4 flex-wrap align-items-start flex-wrap-reverse'>
                        <div className='d-flex flex-row gap-4'>
                            <button
                                onClick={updateGroup}
                                disabled={!changesMade || !formIsCorrect}
                                className='btn btn-success'
                            >
                                Оновити
                            </button>
                            <button onClick={deleteGroup} className='btn btn-danger'>
                                Видалити
                            </button>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
};