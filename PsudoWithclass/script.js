document.addEventListener("DOMContentLoaded", function () {
  // Initialize with one custom field
  addField();

  // Form submission handler
  document
    .getElementById("dynamicForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate form
      if (!validateForm()) {
        showAlert("Please fill in all required fields", "error");
        return;
      }

      // Get form data
      const formData = getFormData();

      // Show success message
      showAlert("Form submitted successfully!", "success");
      console.log("Form Data:", formData);

      // Here you would typically send the data to a server
      // sendDataToServer(formData);
    });
});

function addField() {
  const fieldContainer = document.querySelector(".field-container");
  const newField = document.createElement("div");
  newField.className = "field-row";
  newField.innerHTML = `
        <div class="form-group floating-label">
            <input type="text" class="field-name" required>
            <label>Field Name</label>
            <span class="focus-border"></span>
        </div>
        <div class="form-group floating-label">
            <input type="text" class="field-value" required>
            <label>Field Value</label>
            <span class="focus-border"></span>
        </div>
        <button type="button" class="btn remove-btn" onclick="removeField(this)">
            <i class="fas fa-trash"></i>
        </button>
    `;
  fieldContainer.appendChild(newField);

  // Add animation
  newField.style.animation = "slideIn 0.3s ease-out";

  // Focus on the new field name input
  setTimeout(() => {
    newField.querySelector(".field-name").focus();
  }, 300);
}

function removeField(button) {
  const fieldRows = document.querySelectorAll(".field-row");

  if (fieldRows.length > 1) {
    const rowToRemove = button.closest(".field-row");
    rowToRemove.style.animation = "fadeOut 0.3s ease-out";

    setTimeout(() => {
      rowToRemove.remove();
    }, 300);
  } else {
    showAlert("You need at least one custom field", "warning");
  }
}

function validateForm() {
  // Validate basic fields
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!firstName || !lastName || !email) {
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Validate custom fields
  const fieldNames = document.querySelectorAll(".field-name");
  const fieldValues = document.querySelectorAll(".field-value");

  for (let i = 0; i < fieldNames.length; i++) {
    if (!fieldNames[i].value.trim() || !fieldValues[i].value.trim()) {
      return false;
    }
  }

  return true;
}

function getFormData() {
  const formData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    customFields: {},
  };

  const fieldNames = document.querySelectorAll(".field-name");
  const fieldValues = document.querySelectorAll(".field-value");

  fieldNames.forEach((field, index) => {
    const name = field.value.trim();
    const value = fieldValues[index].value.trim();
    if (name && value) {
      formData.customFields[name] = value;
    }
  });

  return formData;
}

function showAlert(message, type) {
  // Remove any existing alerts
  const existingAlert = document.querySelector(".alert");
  if (existingAlert) {
    existingAlert.remove();
  }

  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.innerHTML = `
        <i class="fas ${
          type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
        }"></i>
        <span>${message}</span>
    `;

  document.body.appendChild(alert);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    alert.style.animation = "fadeOut 0.5s ease-out";
    setTimeout(() => {
      alert.remove();
    }, 500);
  }, 3000);
}

// Add fadeOut animation dynamically
const style = document.createElement("style");
style.textContent = `
    .alert {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: var(--shadow);
        z-index: 1000;
        animation: fadeIn 0.5s ease-out;
    }
    
    .alert-success {
        background-color: var(--success-color);
    }
    
    .alert-error {
        background-color: var(--danger-color);
    }
    
    .alert-warning {
        background-color: #ff9f1c;
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(20px); }
    }
`;
document.head.appendChild(style);
