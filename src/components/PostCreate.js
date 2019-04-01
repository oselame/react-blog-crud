import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostCreate extends Component {
    renderField(field) {
        const {
            meta: { touched, error }
        } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;
        //todo corrigir a classe de erro

        return (
            <div className={className}>
                <label> {field.label} </label> <input className="form-control" type="text" {...field.input} />
                <div className="text-help"> {touched ? error : ''} </div>{' '}
            </div>
        );
    }

    onFormSubmit(values) {
        //console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field label="Title" name="title" component={this.renderField} />{' '}
                <Field label="Categories" name="categories" component={this.renderField} />{' '}
                <Field label="Content" name="content" component={this.renderField} />{' '}
                <button type="submit" className="btn btn-primary">
                    Submit{' '}
                </button>{' '}
                <Link className="btn btn-danger" to="/">
                    Cancel{' '}
                </Link>{' '}
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title!';
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories!';
    }

    if (!values.content) {
        errors.content = 'Enter a content please!';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostForm'
})(
    connect(
        null,
        {
            createPost
        }
    )(PostCreate)
);
