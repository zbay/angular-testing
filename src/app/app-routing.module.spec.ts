import { routes } from './app-routing.module';
import { TodosComponent } from './todos/todos.component';

describe('routes', () => {
    it('should contain a /todos route', () => {
        expect(routes).toContain({path: 'todos', component: TodosComponent});
    });
});