package HRDepartment.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HRDepartment.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: ТЧ_отчета
 */
@Entity(name = "IISHRDepartmentТЧ_отчета")
@Table(schema = "public", name = "ТЧ_отчета")
public class TCH_otcheta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Результат")
    private String результат;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "LKS")
    @Convert("LKS")
    @Column(name = "ЛКС", length = 16, unique = true, nullable = false)
    private UUID _lksid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "LKS", insertable = false, updatable = false)
    private LKS lks;

    @OneToMany(mappedBy = "tch_otcheta", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Otchet> otchets;


    public TCH_otcheta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРезультат() {
      return результат;
    }

    public void setРезультат(String результат) {
      this.результат = результат;
    }


}