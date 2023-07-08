import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403).send('Not Permitted');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
    res.send(`
             <form method="POST" action="/login">
                <div>
                    <label>Email</label>
                    <input name="email">
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password">
                </div>
                <button>Submit</button>
             </form>
             `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // mark this person as logged in
        req.session = { loggedIn: true };
        // redirect them to the root route
        res.redirect('/');
    } else {
        res.send('invalid email or password');
    }
});

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
                 <div>
                    <div>
                        <h1>You are logged in!</h1>
                        <a href="/logout">Log out</a>
                    </div>
                 </div>
                 `);
    } else {
        res.send(`
                 <div>
                        <h1>Welcome to the website</h1>
                    <div>
                        <a href="/login">Login</a>
                    </div>
                 </div>
                 `);
    }
});

router.get("/logout", (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');

});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected Route');
});

export { router };
