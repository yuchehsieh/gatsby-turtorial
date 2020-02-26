import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

const FormFields = ({ id, formdata, onChange, intl }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_label" >
        {formdata.validation && formdata.validationMessage.trim() !== ''
          ? intl.formatMessage({ id: formdata.validationMessage })
          : null}
      </div>
    )
    return errorMessage
  }

  const renderTemplate = () => {
    let formTemplate = null

    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div>
            <div className="label_inputs">{intl.formatMessage({ id: formdata.config.label })}</div>
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={event => onChange(event, id)}
            />
            {showError()}
          </div>
        )
        break
      case "select":
        formTemplate = (
          <div>
            {formdata.showlabel ? (
              <div className="label_inputs">{formdata.config.label}</div>
            ) : null}

            <select
              value={formdata.value}
              onChange={event => onChange({ event, id })}
            >
              <option value="">Select one</option>
              {/* default value */}
              {formdata.config.options.map(item => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>

            {showError()}
          </div>
        )

        break

      default:
        formTemplate = null
    }

    return formTemplate
  }

  return <div>{renderTemplate()}</div>
}

export default injectIntl(FormFields)