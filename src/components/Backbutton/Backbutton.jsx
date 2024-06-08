import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link to="#" onClick={() => window.history.back()}>
      ارجع
    </Link>
  );
}
