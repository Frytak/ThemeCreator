// Test snippets for Rust

use std::{borrow::Cow, rc::Rc, cell::RefCell};

fn main() {
    let mut hello: String = "Hello".to_string();
    let mut world: String = "World!".to_lowercase();

    hello.pop();
    world.chars().map(|c| { 'o' });

    print!("{}{}", &hello, &world);
}

struct StructSnippet {
    x: usize,
    y: usize,
    pub name: String,
}

impl StructSnippet {
    pub fn set_to_origin(&mut self) {
        self.x = 0;
        self.y = 0;
    }
}

enum EnumSnippet<'a> {
    SappyInsane,
    Verdek(Nub),
    Sayla((String, usize)),
    Bananek(Rc<RefCell<StructSnippet>>),
    YoMama(Cow<'static, [f64]>),
}

trait TraitSnippet<T> {
    fn get_x(&mut self) -> u128;
    fn get_y(&mut self) -> u128;

    fn welcome_everybody() {
        println!("Hello people!!!");
    }

    fn multiply(&self) -> Result<u128, EnumSnippet> {
        self.get_x().checked_mul(self.get_y()).ok_or(EnumSnippet::SappyInsane)
    }
}
