import s from './SubscribeForm.module.scss';

import {TextField} from '@material-ui/core';
import {MailOutline} from '@material-ui/icons';

import {Button} from '@atomic/atoms/Button/Button';
import {Text} from '@atomic/atoms/Text/Text';

import c from './config.json';

export const SubscribeForm: React.FC = () => {
  const handleSubmit = () => {
    window.open(
      c.SubscribeForm.form.action,
      c.SubscribeForm.form.target,
      c.SubscribeForm.form.view,
    );
  };

  return (
    <form
      className={s.root}
      onSubmit={handleSubmit}
      method={c.SubscribeForm.form.method}
      action={c.SubscribeForm.form.action}
      target={c.SubscribeForm.form.target}
    >
      <div className={s.title_container}>
        <MailOutline />
        <Text mod="h3" weight="500" className={s.title}>
          {c.SubscribeForm.title}
        </Text>
      </div>
      <TextField
        margin="dense"
        label={c.SubscribeForm.textFieldLabel}
        color="secondary"
        variant="outlined"
        fullWidth
      />
      <Button color="purple" className={s.button} fullWidth>
        {c.SubscribeForm.buttonMessage}
      </Button>
      <Text mod="p" weight="400" className={s.description}>
        {c.SubscribeForm.description}
      </Text>
    </form>
  );
};
