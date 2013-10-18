using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using AngularCrudCSharp.Models;
using Nancy;
using Nancy.ModelBinding;

namespace AngularCrudCSharp.Modules.Api {

    public class AccountsModule : NancyModule {

        private static readonly ICollection<Account> Accounts = new Collection<Account> {
            new Account{ Id = 1, Name = "teste A", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 2, Name = "teste B", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 3, Name = "teste C", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 4, Name = "teste D", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 5, Name = "teste E", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 6, Name = "teste F", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 7, Name = "teste G", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 8, Name = "teste H", Email = "junior@gmail.com", Password = "teste", Deleted = false },
            new Account{ Id = 9, Name = "teste I", Email = "junior@gmail.com", Password = "teste", Deleted = false }
        };

        public AccountsModule() {
            base.Get["api/accounts/"] = _ => Get();
            base.Get["api/accounts/{id}"] = _ => Get(_.id);
            base.Put["api/accounts/"] = _ => Put(this.Bind());
            base.Post["api/accounts/"] = _ => Post(this.Bind());
            base.Post["api/accounts/{id}"] = _ => Recover(_.id);
            base.Delete["api/accounts/{id}"] = _ => Delete(_.id);
        }

        private new static IEnumerable<dynamic> Get() {
            return Accounts.Where(account => account.Deleted == false)
                           .Select(account => new { id = account.Id, name = account.Name, email = account.Email });
        }

        private static dynamic Get(int id) {
            return Accounts.Where(account => account.Id == id)
                           .Select(account => new { id = account.Id, name = account.Name, email = account.Email })
                           .FirstOrDefault();
        }

        private static dynamic Put(AccountModel model) {
            try {
                var account = Accounts.FirstOrDefault(c => c.Id == model.id);
                Accounts.Remove(account);

                Accounts.Add(new Account {
                    Id = model.id,
                    Name = model.name,
                    Email = model.email,
                    Password = model.password,
                    Deleted = false
                });

                return model;
            }
            catch {
                return HttpStatusCode.ExpectationFailed;
            }
        }

        private static HttpStatusCode Post(AccountModel model) {
            try {
                if (model.id > 0) {
                    var account = Accounts.FirstOrDefault(c => c.Id == model.id);
                    Accounts.Remove(account);

                    account.Deleted = false;
                    Accounts.Add(account);

                    return HttpStatusCode.Created;
                }

                var id = Accounts.Max(c => c.Id) + 1;
                model.id = id;

                Accounts.Add(new Account {
                    Id = model.id,
                    Name = model.name,
                    Email = model.email,
                    Password = model.password,
                    Deleted = false
                });

                return HttpStatusCode.Created;
            }
            catch {
                return HttpStatusCode.ExpectationFailed;
            }
        }

        private static HttpStatusCode Recover(int id) {
            try {
                var account = Accounts.FirstOrDefault(c => c.Id == id);
                Accounts.Remove(account);

                account.Deleted = false;
                Accounts.Add(account);

                return HttpStatusCode.Created;
            }
            catch {
                return HttpStatusCode.ExpectationFailed;
            }
        }

        private static HttpStatusCode Delete(int id) {
            try {
                var account = Accounts.FirstOrDefault(c => c.Id == id);
                Accounts.Remove(account);

                account.Deleted = true;
                Accounts.Add(account);

                return HttpStatusCode.NoContent;
            }
            catch {
                return HttpStatusCode.ExpectationFailed;
            }
        }
    }

    public class Account {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Deleted { get; set; }
    }
}
