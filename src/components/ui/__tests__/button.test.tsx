import { render, screen } from '@testing-library/react';

import { Button } from '../button';

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button asChild={false}>Clique aqui</Button>);

    expect(screen.getByRole('button', { name: 'Clique aqui' })).toBeVisible();
  });

  it('should render successfully asChild', () => {
    render(
      <Button asChild={true}>
        <a href="">Clique aqui no link</a>
      </Button>
    );

    expect(screen.getByText('Clique aqui no link')).toBeVisible();
  });
});
