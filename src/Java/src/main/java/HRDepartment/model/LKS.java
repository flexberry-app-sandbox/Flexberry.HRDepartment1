package HRDepartment.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HRDepartment.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЛКС
 */
@Entity(name = "IISHRDepartmentЛКС")
@Table(schema = "public", name = "ЛКС")
public class LKS {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Контакты")
    private String контакты;

    @Column(name = "Дата_приема")
    private Date дата_приема;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otdel")
    @Convert("Otdel")
    @Column(name = "Отдел", length = 16, unique = true, nullable = false)
    private UUID _otdelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otdel", insertable = false, updatable = false)
    private Otdel otdel;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;


    public LKS() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getКонтакты() {
      return контакты;
    }

    public void setКонтакты(String контакты) {
      this.контакты = контакты;
    }

    public Date getДата_приема() {
      return дата_приема;
    }

    public void setДата_приема(Date дата_приема) {
      this.дата_приема = дата_приема;
    }


}