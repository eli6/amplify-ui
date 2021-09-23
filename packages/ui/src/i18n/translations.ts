/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
import { I18n } from 'aws-amplify';
import { NoInfer } from '../types';

/**
 * Contains translatable strings that authenticator provides by default. Customers
 * can use this to add custom vocabularies:
 *
 * ```
 * I18n.putVocabulariesForLanguage("en", {
 *  [DefaultTexts.SIGN_IN_TEXT]: "Custom Sign In Header Text",
 *  [DefaultTexts.SIGN_IN_BUTTON_TEXT]: "Custom Click Here to Sign In"
 * });
 * ```
 */
export const DefaultTexts = {
  BACK_SIGN_IN_TEXT: 'Back to Sign In',
  CHANGE_PASSWORD_LABEL: 'Change Password',
  CHANGING_PASSWORD_LABEL: 'Changing',
  CODE_TEXT: 'Code',
  CONFIRM_PASSWORD_LABEL: 'Confirm Password',
  CONFIRM_RESET_PASSWORD_HEADING: 'Reset your Password',
  CONFIRM_RESET_PASSWORD_TEXT: 'Submit',
  CONFIRM_SIGNUP_HEADING: 'Confirm Sign Up',
  CONFIRM_SMS_LABEL: 'Confirm SMS Code',
  CONFIRM_TEXT: 'Confirm',
  CONFIRM_TOTP_LABEL: 'Confirm TOTP Code',
  CONFIRMATION_CODE_TEXT: 'Confirmation Code',
  CREATE_ACCOUNT_LABEL: 'Create Account',
  CREATE_ACCOUNT_LINK: 'Create account',
  EMAIL_ADDRESS_LABEL: 'Email',
  ENTER_USERNAME_TEXT: 'Enter your username',
  FORGOT_YOUR_PASSWORD_LINK: 'Forgot your password? ',
  HAVE_ACCOUNT_LABEL: 'Have an account? ',
  HIDE_PASSWORD: 'Hide password',
  LOGIN_NAME_TEXT: 'Username',
  LOST_YOUR_CODE_TEXT: 'Lost your code? ',
  NO_ACCOUNT: 'No account? ',
  PASSWORD_LABEL: 'Password',
  PASSWORD_TEXT: 'Password',
  PHONE_NUMBER_LABEL: 'Phone Number',
  RESEND_CODE_TEXT: 'Resend Code',
  RESET_PASSWORD_HEADING: 'Reset your password',
  RESET_PASSWORD_TEXT: 'Send Code',
  SETUP_TOTP_TEXT: 'Setup TOTP',
  SHOW_PASSWORD: 'Show password',
  SIGN_IN_BUTTON_TEXT: 'Sign in',
  SIGN_IN_TEXT: 'Sign in to your account',
  SIGN_IN_WITH_AMAZON: 'Sign In with Amazon',
  SIGN_IN_WITH_APPLE: 'Sign In with Apple',
  SIGN_IN_WITH_FACEBOOK: 'Sign In with Facebook',
  SIGN_IN_WITH_GOOGLE: 'Sign In with Google',
  SIGN_UP_BUTTON_TEXT: 'Create a new account',
  SIGNING_IN_BUTTON_TEXT: 'Signing in',
  SKIP_TEXT: 'Skip',
  VERIFY_HEADING: 'Account recovery requires verified contact information',
  VERIFY_TEXT: 'Verify',
} as const;

// type Phrase = "Back to Sign In" | "Change Password" | ...
// TODO: should just be defined directly?
export type Phrase = typeof DefaultTexts[keyof typeof DefaultTexts];

/**
 * This helper type checks that given phrase is one of the texts @aws-amplify/ui
 * provides by default.
 *
 * This will enable vscode autocompleted and help catch typos during development.
 * For example, translate('Submit') is valid but translate('Subnit') is not.
 *
 * You can use translate<string> to handle custom strings or dynamic content.
 */
export function translate<T = Phrase>(phrase: NoInfer<T>): string {
  return I18n.get(phrase);
}

export type CustomVocab = Partial<Record<Phrase, string>> & {
  [custom_label: string]: string;
};

// TODO: added this as POC. Does this actually improve DX for users?
export const putTranslationsForLang = (lang: string, vocab: CustomVocab) => {
  I18n.putVocabulariesForLanguage(lang, vocab);
};

/**
 * TODO: The string keys below can be inferred from DefaultTexts using
 * https://github.com/aws-amplify/amplify-ui/pull/189#discussion_r690896123,
 * but this needs translation key standarization. DefaultTexts above is more
 * accurate to what we use in authenticator@next.
 */
export const translations = {
  de: {
    'Account recovery requires verified contact information':
      'Zurücksetzen des Account benötigt einen verifizierten Account',
    'An account with the given email already exists.':
      'Ein Account mit dieser Email existiert bereits.',
    'Back to Sign In': 'Zurück zur Anmeldung',
    'Change Password': 'Passwort ändern',
    Code: 'Code',
    Confirm: 'Bestätigen',
    'Confirm a Code': 'Code bestätigen',
    'Confirm Sign In': 'Anmeldung bestätigen',
    'Confirm Sign Up': 'Registrierung bestätigen',
    'Confirmation Code': 'Bestätigungs-Code',
    'Create a new account': 'Erstelle einen neuen Account',
    'Create account': 'Hier registrieren',
    'Create Account': 'Account erstellen',
    Email: 'Email',
    'Enter your password': 'Geben Sie Ihr Passwort ein',
    'Enter your username': 'Geben Sie Ihren Benutzernamen ein',
    'Forgot Password': 'Passwort vergessen',
    'Forgot your password? ': 'Passwort vergessen? ',
    'Have an account? ': 'Schon registriert? ',
    'Incorrect username or password':
      'Falscher Benutzername oder falsches Passwort',
    'Invalid password format': 'Ungültiges Passwort-Format',
    'Invalid phone number format': `Ungültiges Telefonummern-Format.
              Benutze eine Nummer im Format: +12345678900`,
    'Lost your code? ': 'Code verloren? ',
    'New Password': 'Neues Passwort',
    'No account? ': 'Kein Account? ',
    Password: 'Passwort',
    'Password attempts exceeded':
      'Die maximale Anzahl der fehlerhaften Anmeldeversuche wurde erreicht',
    'Phone Number': 'Telefonnummer',
    'Resend Code': 'Code erneut senden',
    'Reset password': 'Passwort zurücksetzen',
    'Reset your password': 'Zurücksetzen des Passworts',
    'Send Code': 'Code senden',
    'Sign in': 'Anmelden',
    'Sign In': 'Anmelden',
    'Sign in to your account': 'Melden Sie sich mit Ihrem Account an',
    'Sign Out': 'Abmelden',
    'Sign Up': 'Registrieren',
    Skip: 'Überspringen',
    Submit: 'Abschicken',
    'User already exists': 'Dieser Benutzer existiert bereits',
    'User does not exist': 'Dieser Benutzer existiert nicht',
    Username: 'Benutzername',
    'Username cannot be empty': 'Benutzername darf nicht leer sein',
    Verify: 'Verifizieren',
    'Verify Contact': 'Kontakt verifizieren',
  },
  es: {
    'Account recovery requires verified contact information':
      'La recuperación de la cuenta requiere información de contacto verificada',
    'Back to Sign In': 'Iniciar sesión',
    'Change Password': 'Cambia la contraseña',
    Code: 'Código',
    Confirm: 'Confirmar',
    'Confirm a Code': 'Confirmar un código',
    'Confirm Sign In': 'Confirmar inicio de sesión',
    'Confirm Sign Up': 'Confirmar Registración',
    'Confirmation Code': 'Codigo de confirmación',
    'Create a new account': 'Crear una cuenta nueva',
    Email: 'Email',
    'Forgot Password': 'Se te olvidó la contraseña?',
    'Incorrect username or password':
      'Nombre de usuario o contraseña incorrecta',
    'Invalid password format': 'Formato de contraseña inválido',
    'Invalid phone number format':
      'Formato de n\xFAmero de tel\xE9fono inv\xE1lido.\nUtilice el formato de n\xFAmero de tel\xE9fono +12345678900',
    'Loading...': 'Cargando...',
    'New Password': 'Nueva contraseña',
    Password: 'Contraseña',
    'Phone Number': 'Número de teléfono',
    'Resend a Code': 'Reenviar un código',
    'Resend Code': 'Mandar codigo otra vez',
    'Send Code': 'Enviar código',
    'Sign In': 'Iniciar sesíon',
    'Sign in to your account': 'Iniciar sesíon',
    'Sign Out': 'Desconectar',
    'Sign Up': 'Regístrase',
    Skip: 'Omitir',
    Submit: 'Enviar',
    'User already exists': 'El usuario ya existe',
    'User does not exist': 'El usuario no existe',
    Username: 'Nombre de usuario',
    'Username cannot be empty': 'El campo de usuario no puede estar vacido',
    Verify: 'Verificar',
    'Verify Contact': 'Verificar contacto',
  },
  fr: {
    'Account recovery requires verified contact information':
      'La récupération du compte nécessite des informations de contact vérifiées',
    'An account with the given email already exists.':
      'Un utilisateur avec cette adresse email existe déjà.',
    'Back to Sign In': 'Retour à la connexion',
    Change: 'Modifier',
    'Change Password': 'Modifier le mot de passe',
    Code: 'Code',
    Confirm: 'Confirmer',
    'Confirm a Code': 'Confirmer un code',
    'Confirm Sign In': 'Confirmer la connexion',
    'Confirm Sign Up': "Confirmer l'inscription",
    'Confirm SMS Code': 'Confirmer le code SMS',
    'Confirm TOTP Code': 'Confirmer le code TOTP',
    'Confirmation Code': 'Code de confirmation',
    'Create a new account': 'Créer un nouveau compte',
    'Create account': 'Créer un compte',
    'Create Account': 'Créer un compte',
    Email: 'Email',
    'Enter your code': 'Saisissez cotre code de confirmation',
    'Enter your email': 'Saisissez votre adresse email',
    'Enter your password': 'Saisissez votre mot de passe',
    'Enter your phone number': 'Saisissez votre numéro de téléphone',
    'Enter your username': "Saisissez votre nom d'utilisateur",
    'Forgot Password': 'Mot de passe oublié',
    'Forgot your password? ': 'Mot de passe oublié ? ',
    'Have an account? ': 'Déjà un compte ? ',
    Hello: 'Bonjour',
    'Incorrect username or password': 'Identifiant ou mot de passe incorrect',
    'Invalid password format': 'Format de mot de passe invalide',
    'Invalid phone number format': `Format de numéro de téléphone invalide. Veuillez utiliser un format +12345678900`,
    'Loading...': 'Chargement...',
    'Lost your code? ': 'Vous avez perdu votre code ? ',
    'Network error': 'Erreur réseau',
    'New Password': 'Nouveau mot de passe',
    'No account? ': 'Pas de compte ? ',
    or: 'ou',
    Password: 'Mot de passe',
    'Phone Number': 'Numéro de téléphone',
    'Resend a Code': 'Renvoyer un code',
    'Resend Code': 'Renvoyer le code',
    'Reset password': 'Réinitialisez votre mot de passe',
    'Reset your password': 'Réinitialisez votre mot de passe',
    Send: 'Envoyer',
    'Send Code': "M'envoyer un code",
    'Sign in': 'Se connecter',
    'Sign In': 'Se connecter',
    'Sign in to your account': 'Connexion à votre compte',
    'Sign In with Amazon': 'Se connecter avec Amazon',
    'Sign In with AWS': 'Se connecter avec AWS',
    'Sign In with Facebook': 'Se connecter avec Facebook',
    'Sign In with Google': 'Se connecter avec Google',
    'Sign Out': 'Déconnexion',
    'Sign Up': "S'inscrire",
    Skip: 'Passer',
    SMS: 'SMS',
    Submit: 'Soumettre',
    'User already exists': "L'utilisateur existe déjà",
    'User does not exist': "L'utilisateur n'existe pas",
    Username: "Nom d'utilisateur",
    'Username cannot be empty': "Le nom d'utilisateur doit être renseigné",
    'Username/client id combination not found.': "L'utilisateur n'existe pas",
    Verify: 'Vérifier',
    'Verify Contact': 'Vérifier le contact',
  },
  it: {
    'Account recovery requires verified contact information':
      'Ripristino del conto richiede un account verificati',
    'An account with the given email already exists.':
      'Un account con questa email esiste già.',
    'Back to Sign In': 'Torna alla Accesso',
    'Change Password': 'Cambia la password',
    Code: 'Codice',
    Confirm: 'Conferma',
    'Confirm a Code': 'Codice Conferma',
    'Confirm Sign In': 'Conferma di applicazione',
    'Confirm Sign Up': 'Registrazione Conferma',
    'Confirmation Code': 'Codice di verifica',
    'Create a new account': 'Creare un nuovo account',
    'Create account': 'Registrati',
    'Create Account': 'Crea account',
    Email: 'E-mail',
    'Enter your password': 'Inserire la password',
    'Enter your username': 'Inserisci il tuo nome utente',
    'Forgot Password': 'Password dimenticata',
    'Forgot your password? ': 'Password dimenticata?',
    'Have an account? ': 'Già registrato?',
    'Incorrect username or password': 'Nome utente o password errati',
    'Invalid password format': 'Formato della password non valido',
    'Invalid phone number format':
      'Utilizzo non valido Telefonummern formattare un numero nel formato :. 12.345.678,9 mille',
    'Lost your code?': 'Perso codice?',
    'New Password': 'Nuova password',
    'No account? ': 'Nessun account?',
    Password: 'Password',
    'Password attempts exceeded':
      'Il numero massimo di tentativi di accesso falliti è stato raggiunto',
    'Phone Number': 'Numero di telefono',
    'Resend Code': 'Codice Rispedisci',
    'Reset password': 'Ripristina password',
    'Reset your password': 'Resetta password',
    'Send Code': 'Invia codice',
    'Sign in': 'Accesso',
    'Sign In': 'Accesso',
    'Sign in to your account': 'Accedi con il tuo account a',
    'Sign Out': 'Esci',
    'Sign Up': 'Iscriviti',
    Skip: 'Salta',
    Submit: 'Sottoscrivi',
    'User already exists': 'Questo utente esiste già',
    'User does not exist': 'Questo utente non esiste',
    Username: 'Nome utente',
    'Username cannot be empty': 'Nome utente non può essere vuoto',
    Verify: 'Verifica',
    'Verify Contact': 'Contatto verifica',
  },
  ja: {
    'Account recovery requires verified contact information':
      'アカウントの復旧には確認済みの連絡先が必要です',
    'An account with the given email already exists.':
      '入力されたメールアドレスのアカウントが既に存在します',
    'Back to Sign In': 'サインインに戻る',
    'Change Password': 'パスワードを変える ',
    Code: 'コード',
    Confirm: '確定',
    'Confirm a Code': 'コードを確認',
    'Confirm Sign In': 'サインインする',
    'Confirm Sign Up': '登録する',
    'Confirmation Code': '確認コード',
    'Create a new account': '新しいアカウントを作る',
    'Create account': 'アカウントを作る ',
    'Create Account': 'アカウントを作る',
    Email: 'メールアドレス',
    'Enter your password': 'パスワードを入力 ',
    'Enter your username': 'ユーザー名を入力 ',
    'Forgot Password': 'パスワードを忘れた ',
    'Forgot your password? ': 'パスワードを忘れましたか？ ',
    'Have an account? ': 'アカウントを持っていますか？',
    'Incorrect username or password': 'ユーザー名かパスワードが異なります ',
    'Invalid password format': 'パスワードの形式が無効です ',
    'Invalid phone number format':
      '不正な電話番号の形式です。\n+12345678900 の形式で入力してください',
    'Lost your code? ': 'コードを失くしましたか？',
    'New Password': '新しいパスワード',
    'No account? ': 'アカウントが無いとき ',
    Password: 'パスワード ',
    'Password attempts exceeded': 'サインインの試行回数が上限に達しました',
    'Phone Number': '電話番号',
    'Resend Code': 'コードを再送信',
    'Reset password': 'パスワードをリセット ',
    'Reset your password': 'パスワードをリセットする',
    'Send Code': 'コードを送信',
    'Sign in': 'サインイン',
    'Sign In': 'サインイン ',
    'Sign in to your account': 'アカウントにサインイン ',
    'Sign In with Amazon': 'Amazonでサインイン',
    'Sign In with Facebook': 'Facebookでサインイン',
    'Sign In with Google': 'Googleでサインイン',
    'Sign Out': 'サインアウト ',
    'Sign Up': '登録 ',
    Skip: 'スキップ',
    Submit: '送信',
    'User already exists': '既にユーザーが存在しています ',
    'User does not exist': 'ユーザーが存在しません ',
    Username: 'ユーザー名 ',
    'Username cannot be empty': 'ユーザー名は入力必須です',
    Verify: '確認',
    'Verify Contact': '連絡先を確認',
  },
  zh: {
    'Account recovery requires verified contact information':
      '账户恢复需要验证过的联系方式',
    'Back to Sign In': '回到登录',
    'Change Password': '改变密码',
    Code: '确认码',
    Confirm: '确认',
    'Confirm a Code': '确认码',
    'Confirm Sign In': '确认登录',
    'Confirm Sign Up': '确认注册',
    Email: '邮箱',
    'Forgot Password': '忘记密码',
    'Incorrect username or password': '用户名或密码错误',
    'Invalid password format': '密码格式错误',
    'Invalid phone number format': '电话格式错误，请使用格式 +12345678900',
    'New Password': '新密码',
    Password: '密码',
    'Phone Number': '电话',
    'Resend a Code': '重发确认码',
    'Send Code': '发送确认码',
    'Sign In': '登录',
    'Sign Out': '退出',
    'Sign Up': '注册',
    Skip: '跳过',
    Submit: '提交',
    'User already exists': '用户已经存在',
    'User does not exist': '用户不存在',
    Username: '用户名',
    Verify: '验证',
    'Verify Contact': '验证联系方式',
  },
};
