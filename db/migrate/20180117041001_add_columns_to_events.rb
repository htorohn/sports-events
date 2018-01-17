class AddColumnsToEvents < ActiveRecord::Migration[5.1]
  def change
    change_table(:events) do |t|
      t.column :hora, :time
      t.column :fecha, :date
      t.column :lugar, :string
      t.column :meta, :string
      t.column :inicio_inscripcion, :date
      t.column :fin_inscripcion, :date
      t.column :costo_inscripcion, :integer
      t.column :pagina_web, :string
      t.column :logo, :string
      t.column :numero_inicial, :integer
      t.column :nombre_contacto, :string
      t.column :telefono_contacto, :string
      t.column :email_contacto, :string
    end
  end
end
