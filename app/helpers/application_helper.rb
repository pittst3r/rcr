module ApplicationHelper
  
  def menu_pages
    Refinery::Page.in_menu.order("rgt ASC").map do |page|
      { path: "/#{page.slug}", title: page.title }
    end
  end
end
