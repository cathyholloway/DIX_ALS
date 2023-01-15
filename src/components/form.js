// Example
<Ideas
  name="email"
  type="email"
  required="Email is required"
  validations={[
    {
      rule: isEmail(),
      message: 'Not a valid email',
    }
  ]}
/>