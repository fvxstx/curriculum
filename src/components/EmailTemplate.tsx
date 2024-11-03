interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const EmailTemplate = ({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) => {
  return (
    <div>
      Welcome {firstName} {lastName}
      <div>{message}</div>
      by {email}
    </div>
  );
};

export default EmailTemplate;
