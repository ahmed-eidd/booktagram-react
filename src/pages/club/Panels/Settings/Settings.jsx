import React from 'react';
import classes from './Settings.module.scss';
import { Formik } from 'formik';
import FormGroup from '../../../../components/Form/FormGroup/FormGroup';
import InputField from '../../../../components/Form/InputField/InputField';
import Select from '../../../../components/Form/Select/Select';
import MultiSelect from '../../../../components/Form/MutliSelect/MultiSelect';
import Button from '../../../../components/Button/Button';
import TextArea from '../../../../components/Form/TextArea/TextArea';
import Switch from '../../../../components/Form/Switch/Switch';
import * as yup from 'yup';

const Settings = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const schema = yup.object({
    clubName: yup.string().email().default('').required('Must Enter a name'),
    description: yup.string().min(6).default('').required('Must Enter a descript'),
    privacy: yup.boolean().default(false),
    category: yup.string().default('').required('Must'),
    toggle: yup.boolean().default(true)
  });
  const lableStyle = {
    fontWeight: 'bold',
  };
  return (
    <div className={classes.Settings}>
      <Formik
      validationSchema={schema}
        initialValues={schema.cast()}
        enableReinitialize
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, values }) => (
          <FormGroup>
            <InputField
              labelStyle={{
                fontWeight: 'bold',
              }}
              label="Club Name"
              placeholder="Enter Club Name"
              name="clubName"
            />
            <TextArea
              labelStyle={lableStyle}
              name="description"
              label="Description"
            />
            <Select
              labelStyle={lableStyle}
              label="Privacy"
              name="privacy"
              options={options}
            />
            <MultiSelect
              labelStyle={lableStyle}
              label="Category"
              name="category"
              options={options}
            />
            <Switch
              labelStyle={{
                fontWeight: 'bold',
              }}
              label="Pending posts toggle"
              name="toggle"
            />
            <Button type="submit">Save</Button>
          </FormGroup>
        )}
      </Formik>
    </div>
  );
};

export default Settings;
