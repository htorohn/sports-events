Rails.application.routes.draw do
  
  #Ruta para autenticar a lso usuarios administradores
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  #Ruta para autenticar a los usuarios de la app
  post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  #Rutas para acceder al API
  #scope '/api' do
  namespace :api do
    namespace :v1 do
      resources :events
    end
  end

end
