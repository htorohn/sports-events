ActiveAdmin.register Event do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
permit_params :nombre, :user_id, :hora, :fecha, :lugar, :meta, :inicio_inscripcion, 
    :fin_inscripcion, :costo_inscripcion, :pagina_web, :logo, :numero_inicial, 
    :nombre_contacto, :telefono_contacto, :email_contacto, :string

end
